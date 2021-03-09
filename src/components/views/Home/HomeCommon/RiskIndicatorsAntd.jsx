import React, {Component} from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: "1",
    类型: "定增",
    项目: "股权投资基金二期",
    指标级别: "一级",
    指标名称: "单一产品止损线（除股权投资业务外）",
    预警值: "20",
    阈值: "<=30.00%",
    实际值: "35.00%",
    风险级别: "Dot DotRed",
    监控人: "王婧,李灿明",
    情况说明: "暂无",
  },
  {
    key: "2",
    类型: "定增",
    项目: "股权投资基金二期",
    指标级别: "一级",
    指标名称: "单一产品止损线（除股权投资业务外）",
    预警值: "20",
    阈值: "<=30.00%",
    实际值: "35.00%",
    风险级别: "Dot DotOrange",
    监控人: "王婧,李灿明",
    情况说明: "暂无",
  },
  {
    key: "3",
    类型: "定增",
    项目: "股权投资基金二期",
    指标级别: "一级",
    指标名称: "单一产品止损线（除股权投资业务外）",
    预警值: "20",
    阈值: "<=30.00%",
    实际值: "35.00%",
    风险级别: "Dot DotYellow",
    监控人: "王婧,李灿明",
    情况说明: "暂无",
  },
  {
    key: "4",
    类型: "定增",
    项目: "股权投资基金二期",
    指标级别: "一级",
    指标名称: "单一产品止损线（除股权投资业务外）",
    预警值: "20",
    阈值: "<=30.00%",
    实际值: "35.00%",
    风险级别: "Dot DotGreen",
    监控人: "王婧,李灿明",
    情况说明: "暂无",
  },
  {
    key: "5",
    类型: "定增",
    项目: "股权投资基金二期",
    指标级别: "一级",
    指标名称: "单一产品止损线（除股权投资业务外）",
    预警值: "20",
    阈值: "<=30.00%",
    实际值: "35.00%",
    风险级别: "Dot DotBlue",
    监控人: "王婧,李灿明",
    情况说明: "暂无",
  }

];

class RiskIndicatorsAntd extends Component {
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
        title: '类型',
        dataIndex: '类型',
        key: 'LX',
        width: '200',
        ...this.getColumnSearchProps('类型'),
      },
      {
        title: '项目/产品/区域/行业/标的/证券/权益人',
        dataIndex: '项目',
        key: 'XM',
        width: '120',
        ...this.getColumnSearchProps('项目'),
      },
      {
        title: '指标级别',
        dataIndex: '指标级别',
        key: 'ZBJB',
        ...this.getColumnSearchProps('指标级别'),
      },
      {
        title: '指标名称',
        dataIndex: '指标名称',
        key: 'ZBMC',
        ...this.getColumnSearchProps('指标名称'),
      },
      {
        title: '预警值',
        dataIndex: '预警值',
        key: 'YJZ',
        ...this.getColumnSearchProps('预警值'),
      },
      {
        title: '阈值',
        dataIndex: '阈值',
        key: 'YZ',
        ...this.getColumnSearchProps('阈值'),
      },
      {
        title: '实际值',
        dataIndex: '实际值',
        key: 'SJZ',
        ...this.getColumnSearchProps('实际值'),
      },
      {
        title: '风险级别',
        dataIndex: '风险级别',
        key: 'FXJB',
        render: (风险级别) => <div className={风险级别} alt=""/>
        // ...this.getColumnSearchProps('风险级别'),
      },
      {
        title: '监控人',
        dataIndex: '监控人',
        key: 'JKR',
        ...this.getColumnSearchProps('监控人'),
      },
      {
        title: '情况说明',
        dataIndex: '情况说明',
        key: 'QKSM',
        ...this.getColumnSearchProps('情况说明'),
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

export default RiskIndicatorsAntd;