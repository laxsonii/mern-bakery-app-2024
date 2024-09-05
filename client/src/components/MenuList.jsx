import { useQuery } from '@apollo/client';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import './MenuList.css'
const { Meta } = Card;


import { QUERY_ITEMS } from '../utils/queries.js';

const MenuList = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);

  const items = data?.items || [];
  console.log(loading, data)

  const itemList = items.map(item => {
    return (
      <Card
        key={item._id}
        style={{
          width: 300,
        }}
        cover={
          <img
            alt={item.name}
            src={item.img}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="close" />,
        ]}
      >
        <Meta

          title= {item.name}
          description= {`calories: ${item.calories} | cost $${item.cost/100}`}
        />
      </Card>
    )
  })
  return (
    <div className="container">{itemList}</div>
  
  );

}
export default MenuList