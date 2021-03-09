import React, {Component} from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
  {
    key: "1",
    基金状态: "储备",
    基金编号: "JJ2020020501",
    基金类型: "股权基金",
    基金简称: "工银瑞信基金",
    基金全称: "工银瑞信投资基金",
    基金规模: "2,000",
    存续期限: "3年",
    备案完成时间: "2020-11-20",
    基金管理人: "刘昆明",
    管理协议签署时间: "2020-12-25",
  },
  {
    key: "2",
    基金状态: "立项",
    基金编号: "JJ2020020502",
    基金类型: "股权基金",
    基金简称: "北京长石基金",
    基金全称: "北京长石基金",
    基金规模: "2,000",
    存续期限: "5年",
    备案完成时间: "2020-11-20",
    基金管理人: "王婧",
    管理协议签署时间: "2020-12-25"
  },
  {
    key: "3",
    基金状态: "投资",
    基金编号: "JJ2020020503",
    基金类型: "债券基金",
    基金简称: "青骓基金",
    基金全称: "青骓投资基金",
    基金规模: "4,000",
    存续期限: "5年",
    备案完成时间: "2020-11-20",
    基金管理人: "李魏",
    管理协议签署时间: "2020-12-25"
  },
  {
    key: '4',
    基金状态: "投决",
    基金编号: "JJ2020020504",
    基金类型: "货币市场基金",
    基金简称: "凌隆基金",
    基金全称: "凌隆投资基金",
    基金规模: "2,000",
    存续期限: "5年",
    备案完成时间: "2020-11-20",
    基金管理人: "李双灿",
    管理协议签署时间: "2020-12-25"
  },
  {
    key: "5",
    基金状态: "投决",
    基金编号: "JJ2020020504",
    基金类型: "货币市场基金",
    基金简称: "凌隆基金",
    基金全称: "凌隆投资基金",
    基金规模: "2,000",
    存续期限: "5年",
    备案完成时间: "2020-11-20",
    基金管理人: "李双灿",
    管理协议签署时间: "2020-12-25"
  },
];

class FundlistAntd extends Component {
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
        title: '基金状态',
        dataIndex: '基金状态',
        key: 'JJZT',
        width: '200',
        ...this.getColumnSearchProps('基金状态'),
      },
      {
        title: '基金编号',
        dataIndex: '基金编号',
        key: 'JJBH',
        width: '120',
        ...this.getColumnSearchProps('基金编号'),
      },
      {
        title: '基金类型',
        dataIndex: '基金类型',
        key: 'JJLX',
        ...this.getColumnSearchProps('基金类型'),
      },
      {
        title: '基金简称',
        dataIndex: '基金简称',
        key: 'JJJC',
        ...this.getColumnSearchProps('基金简称'),
      },
      {
        title: '基金全称',
        dataIndex: '基金全称',
        key: 'JJQC',
        ...this.getColumnSearchProps('基金全称'),
      },
      {
        title: '基金规模(万元)',
        dataIndex: '基金规模',
        key: 'JJGM',
        ...this.getColumnSearchProps('基金规模'),
      },
      {
        title: '存续期限(年)',
        dataIndex: '存续期限',
        key: 'CXQX',
        ...this.getColumnSearchProps('存续期限'),
      },
      {
        title: '备案完成时间',
        dataIndex: '备案完成时间',
        key: 'BAWCSJ',
        ...this.getColumnSearchProps('备案完成时间'),
      },
      {
        title: '基金管理人',
        dataIndex: '基金管理人',
        key: 'JJGLR',
        ...this.getColumnSearchProps('基金管理人'),
      },
      {
        title: '管理协议签署时间',
        dataIndex: '管理协议签署时间',
        key: 'GLXYQSSJ',
        ...this.getColumnSearchProps('管理协议签署时间'),
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

export default FundlistAntd;