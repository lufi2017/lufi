import React, {Component} from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: "1",
    内容: "去至理电信公司拜访",
    拜访人员: "李一",
    人员职位: "项目经理",
    拜访地点: "北京市",
    登记时间: "2021-01-02 12：30"
  },
  {
    key: "2",
    内容: "去至理电信公司拜访",
    拜访人员: "刘维",
    人员职位: "项目经理",
    拜访地点: "深圳市",
    登记时间: "2021-01-02 12：30"
  },
  {
    key: "3",
    内容: "去至理电信公司拜访",
    拜访人员: "李明亮",
    人员职位: "项目经理",
    拜访地点: "武汉洪山区光谷软件园",
    登记时间: "2021-01-02 12：30"
  },
  {
    key: '4',
    内容: "去至理电信公司拜访",
    拜访人员: "张无双",
    人员职位: "项目经理",
    拜访地点: "武汉洪山区光谷软件园",
    登记时间: "2021-01-02 12：30"
  },
  {
    key: "5",
    内容: "去至理电信公司拜访",
    拜访人员: "罗吴灿",
    人员职位: "项目经理",
    拜访地点: "武汉洪山区光谷软件园",
    登记时间: "2021-01-02 12：30"
  },
];

class TrackRecordXm extends Component {
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
        title: '内容',
        dataIndex: '内容',
        key: 'LR',
        ...this.getColumnSearchProps('内容'),
      },
      {
        title: '拜访人员',
        dataIndex: '拜访人员',
        key: 'BFRY',
        ...this.getColumnSearchProps('拜访人员'),
      },
      {
        title: '人员职位',
        dataIndex: '人员职位',
        key: 'RYZW',
        ...this.getColumnSearchProps('人员职位'),
      },
      {
        title: '拜访地点',
        dataIndex: '拜访地点',
        key: 'BFDD',
        ...this.getColumnSearchProps('拜访地点'),
      },
      {
        title: '登记时间',
        dataIndex: '登记时间',
        key: 'DJSJ',
        ...this.getColumnSearchProps('登记时间'),
      }

    ];
    return <Table columns={columns} dataSource={data} />;
  }
}




export default TrackRecordXm;