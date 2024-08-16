import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import Analatics from "../components/Analatics";
import "../resources/transactions.css";
import { LeftCircleOutlined, RightCircleOutlined, EditOutlined, DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { message, Select, Table, Tooltip } from "antd";
import axios from "axios";
import Spinner from "../components/Spinner";
import AddEditTransaction from "../components/AddEditTransaction";
import { DatePicker } from "antd";
import moment from 'moment';
const { RangePicker } = DatePicker;

function Home() {
  const [loading, setLoading] = useState(false);
  const [transactionsData, setTransactionsData] = useState([]);
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [frequency, setFrequency] = useState("7");
  const [selectedRange, setSelectedRange] = useState([]);
  const [type, setType] = useState("all");
  const [viewType, setViewType] = useState("table");

  const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("expensetracker-dev-user"));
      setLoading(true);
      const response = await axios.post(
        "/api/transactions/get-all-transactions",
        {
          userid: user._id,
          frequency,
          ...(frequency === "custom" && { selectedRange }),
          type,
        }
      );
      setTransactionsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  const deleteTransaction = async (record) => {
    try {
      setLoading(true);
      await axios.post("/api/transactions/delete-transaction", {
        transactionId: record._id,
      });
      message.success("Transaction Deleted successfully");
      getTransactions();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    getTransactions();
  }, [frequency, selectedRange, type]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => (
        <label>{moment(date).format("YYYY-MM-DD")}</label>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div>
          <Tooltip title="Edit">
            <EditOutlined
              onClick={() => {
                setSelectedItemForEdit(record);
                setShowAddEditTransactionModal(true);
              }}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteOutlined className="mx-3" onClick={() => deleteTransaction(record)} />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      
      <div className="filter-container">
        <div className="filter-section">
          <div className="filter-item">
            <h6>Select Frequency</h6>
            <Select value={frequency} onChange={(value) => setFrequency(value)} style={{ width: 150 }}>
              <Select.Option value="7">Last 1 Week</Select.Option>
              <Select.Option value="30">Last 1 Month</Select.Option>
              <Select.Option value="365">Last 1 Year</Select.Option>
              <Select.Option value="custom">Custom</Select.Option>
            </Select>
            {frequency === "custom" && (
              <RangePicker
                value={selectedRange}
                onChange={(values) => setSelectedRange(values)}
                style={{ marginTop: 8 }}
              />
            )}
          </div>

          <div className="filter-item">
            <h6>Select Type</h6>
            <Select value={type} onChange={(value) => setType(value)} style={{ width: 150 }}>
              <Select.Option value="all">All</Select.Option>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </div>
        </div>

        <div className="view-switch-container">
          <Tooltip title="Table View">
            <LeftCircleOutlined 
              className={`view-switch-icon ${viewType === "table" ? "active-icon" : "inactive-icon"}`}
              onClick={() => setViewType("table")}
            />
          </Tooltip>
          <Tooltip title="Analytics View">
            <RightCircleOutlined
              className={`view-switch-icon ${viewType === "analytics" ? "active-icon" : "inactive-icon"}`}
              onClick={() => setViewType("analytics")}
            />
          </Tooltip>

          <Tooltip title="Add New Transaction">
            <button
              className="add-new"
              onClick={() => setShowAddEditTransactionModal(true)}
            >
              <PlusCircleOutlined /> ADD NEW
            </button>
          </Tooltip>
        </div>
      </div>

      <div className="content-section">
        {viewType === "table" ? (
          <div className="table-container">
            <Table columns={columns} dataSource={transactionsData} />
          </div>
        ) : (
          <Analatics transactions={transactionsData} />
        )}
      </div>

      {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          selectedItemForEdit={selectedItemForEdit}
          getTransactions={getTransactions}
          setSelectedItemForEdit={setSelectedItemForEdit}
        />
      )}
    </DefaultLayout>
  );
}

export default Home;
