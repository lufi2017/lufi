import React, {Component} from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: "1",
    项目编号: "XM2020020501",
    项目名称: "北京长石基业股权并购投资项目",
    项目类型: "股权投资项目",
    所属投向: "股权投资类",
    所属区域: "北京市",
    项目方公司: "北京长石基业有限责任公司",
    所属行业: "石油与天然气",
    投资阶段: "扩张期",
    执行阶段: "初步考察",
    项目经理: "王婧",
    投后负责人: "周慧",
    协议投资金额: "4,000.00",
    已投资金额: "10,000.00",
    收益金额: "9,854.00",
    费用金额: "2,000.00",
    投资时间: "2021-03-06",
    登记人: "管理员"
  },
  {
    key: "2",
    项目编号: "XM2020020502",
    项目名称: "至理电信股权投资项目",
    项目类型: "股权投资项目",
    所属投向: "股权投资类",
    所属区域: "北京市",
    项目方公司: "北京长石基业有限责任公司",
    所属行业: "石油与天然气",
    投资阶段: "扩张期",
    执行阶段: "初步考察",
    项目经理: "李魏",
    投后负责人: "周无艳",
    协议投资金额: "4,000.00",
    已投资金额: "10,000.00",
    收益金额: "9,854.00",
    费用金额: "2,000.00",
    投资时间: "2021-03-06",
    登记人: "管理员"
  },
  {
    key: "3",
    项目编号: "XM2020020501",
    项目名称: "纶冠金融股权投资项目",
    项目类型: "股权投资项目",
    所属投向: "股权投资类",
    所属区域: "北京市",
    项目方公司: "北京长石基业有限责任公司",
    所属行业: "石油与天然气",
    投资阶段: "扩张期",
    执行阶段: "初步考察",
    项目经理: "罗昔月",
    投后负责人: "王淼",
    协议投资金额: "4,000.00",
    已投资金额: "10,000.00",
    收益金额: "9,854.00",
    费用金额: "2,000.00",
    投资时间: "2021-03-06",
    登记人: "管理员"
  },
  {
    key: '4',
    项目编号: "XM2020020501",
    项目名称: "沸丽新能源股权投资项目",
    项目类型: "股权投资项目",
    所属投向: "股权投资类",
    所属区域: "北京市",
    项目方公司: "北京长石基业有限责任公司",
    所属行业: "石油与天然气",
    投资阶段: "扩张期",
    执行阶段: "初步考察",
    项目经理: "刘一婉",
    投后负责人: "李艳山",
    协议投资金额: "4,000.00",
    已投资金额: "10,000.00",
    收益金额: "8,255.00",
    费用金额: "4,000.00",
    投资时间: "2021-03-06",
    登记人: "管理员"
  },
  {
    key: "5",
    项目编号: "XM2020020501",
    项目名称: "北京长石基业股权并购投资项目",
    项目类型: "股权投资项目",
    所属投向: "股权投资类",
    所属区域: "北京市",
    项目方公司: "北京长石基业有限责任公司",
    所属行业: "石油与天然气",
    投资阶段: "扩张期",
    执行阶段: "初步考察",
    项目经理: "王奇奇",
    投后负责人: "杨陈",
    协议投资金额: "4,000.00",
    已投资金额: "10,000.00",
    收益金额: "9,854.00",
    费用金额: "2,000.00",
    投资时间: "2021-03-06",
    登记人: "管理员"
  },
];

class ProlistCbAntd extends Component {
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
        title: '项目编号',
        dataIndex: '项目编号',
        key: 'XMBH',
        width: '200',
        ...this.getColumnSearchProps('项目编号'),
      },
      {
        title: '项目名称',
        dataIndex: '项目名称',
        key: 'XMMC',
        width: '120',
        ...this.getColumnSearchProps('项目名称'),
      },
      {
        title: '项目类型',
        dataIndex: '项目类型',
        key: 'XMLX',
        ...this.getColumnSearchProps('项目类型'),
      },
      {
        title: '所属投向',
        dataIndex: '所属投向',
        key: 'SSTX',
        ...this.getColumnSearchProps('所属投向'),
      },
      {
        title: '所属区域',
        dataIndex: '所属区域',
        key: 'SSQY',
        ...this.getColumnSearchProps('所属区域'),
      },
      {
        title: '项目方公司',
        dataIndex: '项目方公司',
        key: 'XMFGS',
        ...this.getColumnSearchProps('项目方公司'),
      },
      {
        title: '所属行业',
        dataIndex: '所属行业',
        key: 'SSHY',
        ...this.getColumnSearchProps('所属行业'),
      },
      {
        title: '投资阶段',
        dataIndex: '投资阶段',
        key: 'TZJD',
        ...this.getColumnSearchProps('投资阶段'),
      },
      {
        title: '执行阶段',
        dataIndex: '执行阶段',
        key: 'ZXJD',
        ...this.getColumnSearchProps('执行阶段'),
      },
      {
        title: '项目经理',
        dataIndex: '项目经理',
        key: 'XMJL',
        ...this.getColumnSearchProps('项目经理'),
      },
      {
        title: '投后负责人',
        dataIndex: '投后负责人',
        key: 'THFZR',
        ...this.getColumnSearchProps('投后负责人'),
      },
      {
        title: '协议投资金额/万元',
        dataIndex: '协议投资金额',
        key: 'XYTZJE',
        ...this.getColumnSearchProps('协议投资金额'),
      },
      {
        title: '已投资金额/万元',
        dataIndex: '已投资金额',
        key: 'YTZJE',
        ...this.getColumnSearchProps('已投资金额'),
      },
      {
        title: '收益金额/万元',
        dataIndex: '收益金额',
        key: 'SYJE',
        ...this.getColumnSearchProps('收益金额'),
      },
      {
        title: '费用金额/万元',
        dataIndex: '费用金额',
        key: 'FYJE',
        ...this.getColumnSearchProps('费用金额'),
      },
      {
        title: '投资时间',
        dataIndex: '投资时间',
        key: 'TZSJ',
        ...this.getColumnSearchProps('投资时间'),
      },
      {
        title: '登记人',
        dataIndex: '登记人',
        key: 'DJR',
        ...this.getColumnSearchProps('登记人'),
      },

    ];
    return <Table columns={columns} dataSource={data} />;
  }
}


// class FundlistAntd extends Component {
//   render() {
//     return (
//         <>
//         </>
//     );
//   }
// }

export default ProlistCbAntd;