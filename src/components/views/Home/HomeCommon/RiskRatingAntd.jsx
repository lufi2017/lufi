import React, {Component} from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: "1",
    项目名称: "股权投资基金二期",
    项目类型: "股权直投",
    项目负责人: "李明",
    预警时间: "2021-02-10",
    风险等级: "投后管理预警",
    投资规模: "300,554.00",
    投资占比: "15%",
    风险详细内容: "公司业绩较差，呈现出逐年下滑的状态2020年1-6月，公司营业收入为18,688.5万元，同比增长16.42%；归属于挂牌公司股东的净利润-3,495.96万元，同比下降879.80%。",
  },
  {
    key: "2",
    项目名称: "上海电子商务",
    项目类型: "股权直投",
    项目负责人: "刘旺盛",
    预警时间: "2021-01-16",
    风险等级: "投后管理预警",
    投资规模: "300,554.00",
    投资占比: "15%",
    风险详细内容: "上海网商2018年实现合并口径净利润138万元，远低于承诺业绩的50%；2019年6月30日前，未完成IPO申报，已触发业绩补偿条款和回购条款。",
  },
  {
    key: "3",
    项目名称: "股权投资基金二期",
    项目类型: "股权直投",
    项目负责人: "李灿阳",
    预警时间: "2021-02-26",
    风险等级: "投后管理预警",
    投资规模: "300,554.00",
    投资占比: "15%",
    风险详细内容: "2017年及2018年，粤通国际未经审计的营业收入分别为42.04亿元和109.18亿元，净利润分别为1.64亿元和0.94亿元。",
  },
  {
    key: '4',
    项目名称: "股权投资基金二期",
    项目类型: "股权直投",
    项目负责人: "王一山",
    预警时间: "2021-02-10",
    风险等级: "投后管理预警",
    投资规模: "300,554.00",
    投资占比: "15%",
    风险详细内容: "公司尚未盈利",
  },
  {
    key: "5",
    项目名称: "股权投资基金二期",
    项目类型: "股权直投",
    项目负责人: "李明",
    预警时间: "2021-02-10",
    风险等级: "投后管理预警",
    投资规模: "300,554.00",
    投资占比: "15%",
    风险详细内容: "公司2017年度亏损额达1.57亿元，2018年度亏损约8.18亿元，2019年度亏损约11亿元，2020年1-6月亏损约3.2亿元。",
  },
];

class RiskRatingAntd extends Component {
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
        title: '项目名称',
        dataIndex: '项目名称',
        key: 'XMMC',
        width: '200',
        ...this.getColumnSearchProps('项目名称'),
      },
      {
        title: '项目类型',
        dataIndex: '项目类型',
        key: 'XMLX',
        width: '120',
        ...this.getColumnSearchProps('项目类型'),
      },
      {
        title: '项目负责人',
        dataIndex: '项目负责人',
        key: 'XMFZR',
        ...this.getColumnSearchProps('项目负责人'),
      },
      {
        title: '预警时间',
        dataIndex: '预警时间',
        key: 'YJSJ',
        ...this.getColumnSearchProps('预警时间'),
      },
      {
        title: '风险等级',
        dataIndex: '风险等级',
        key: 'FXDJ',
        ...this.getColumnSearchProps('风险等级'),
      },
      {
        title: '投资规模(万元)',
        dataIndex: '投资规模',
        key: 'TZGM',
        ...this.getColumnSearchProps('投资规模'),
      },
      {
        title: '投资占比',
        dataIndex: '投资占比',
        key: 'TZZB',
        ...this.getColumnSearchProps('投资占比'),
      },
      {
        title: '风险详细内容',
        dataIndex: '风险详细内容',
        key: 'FXXXLR',
        ...this.getColumnSearchProps('风险详细内容'),
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

export default RiskRatingAntd;