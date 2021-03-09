import React, {Component} from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: "1",
    项目联系人: "李一",
    项目联系人岗位: "项目经理",
    联系方式: "15465487987",
    备注: "无"
  },
  {
    key: "2",
    项目联系人: "刘维",
    项目联系人岗位: "项目经理",
    联系方式: "15465487987",
    备注: "无"
  },
  {
    key: "3",
    项目联系人: "王亮亮",
    项目联系人岗位: "项目经理",
    联系方式: "15465487987",
    备注: "无"
  },
  {
    key: '4',
    项目联系人: "李魏",
    项目联系人岗位: "项目经理",
    联系方式: "15465487987",
    备注: "无"
  },
  {
    key: "5",
    项目联系人: "王琦",
    项目联系人岗位: "人事经理",
    联系方式: "15465487987",
    备注: "无"
  },
  {
    key: "6",
    项目联系人: "王琦",
    项目联系人岗位: "人事经理",
    联系方式: "15465487987",
    备注: "无"
  },
  {
    key: "7",
    项目联系人: "王琦",
    项目联系人岗位: "人事经理",
    联系方式: "15465487987",
    备注: "无"
  },
  {
    key: "8",
    项目联系人: "王琦",
    项目联系人岗位: "人事经理",
    联系方式: "15465487987",
    备注: "无"
  },
  {
    key: "9",
    项目联系人: "王琦",
    项目联系人岗位: "人事经理",
    联系方式: "15465487987",
    备注: "无"
  },
  {
    key: "10",
    项目联系人: "王琦",
    项目联系人岗位: "人事经理",
    联系方式: "15465487987",
    备注: "无"
  },
  {
    key: "11",
    项目联系人: "王琦",
    项目联系人岗位: "人事经理",
    联系方式: "15465487987",
    备注: "无"
  },
];

class ContactXm extends Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`搜索 ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
            >
              搜索
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              重置
            </Button>

          </Space>
        </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
        record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
        this.state.searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text ? text.toString() : ''}
            />
        ) : (
            text
        ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: '项目联系人',
        dataIndex: '项目联系人',
        key: 'XMLXR',
        ...this.getColumnSearchProps('项目联系人'),
      },
      {
        title: '项目联系人岗位',
        dataIndex: '项目联系人岗位',
        key: 'XMLXRGW',
        ...this.getColumnSearchProps('项目联系人岗位'),
      },
      {
        title: '联系方式',
        dataIndex: '联系方式',
        key: 'LXFS',
        ...this.getColumnSearchProps('联系方式'),
      },
      {
        title: '备注',
        dataIndex: '备注',
        key: 'BZ',
        ...this.getColumnSearchProps('备注'),
      }

    ];
    return <Table columns={columns} dataSource={data} />;
  }
}




export default ContactXm;