import { Menu } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const items = [
    {
      key: '1',
      icon: <img style={{width:"25px", borderRadius:"90px"}} src='js-logo.png' alt='js-logo' />,
      label: 'Javascript',
      children: [
        { key: '11', label: 'Option 1' },
        { key: '12', label: 'Option 2' },
        { key: '13', label: 'Option 3' },
        { key: '14', label: 'Option 4' },
      ],
    },
    {
      key: '2',
      icon: <img style={{width:"25px", borderRadius:"90px"}} src='logo192.png' alt='react-logo' />,
      label: 'ReactJS',
      children: [
        { key: '211', label: 'Dashboard' },
        { key: '212', label: 'Forms' },
        { key: '213', label: 'Theme' },
        {
          key: '23',
          label: 'Submenu',
          children: [
            { key: '231', label: 'Option 1' },
            { key: '232', label: 'Option 2' },
            { key: '233', label: 'Option 3' },
          ],
        },
        {
          key: '24',
          label: 'Submenu 2',
          children: [
            { key: '241', label: 'Option 1' },
            { key: '242', label: 'Option 2' },
            { key: '243', label: 'Option 3' },
          ],
        },
      ],
    },
    {
      key: '3',
      icon: <img style={{width:"25px", borderRadius:"90px"}} src='angular-logo.png' alt='angular-js-logo' />,
      label: 'AngularJS',
      children: [
        { key: '31', label: 'Option 1' },
        { key: '32', label: 'Option 2' },
        { key: '33', label: 'Option 3' },
        { key: '34', label: 'Option 4' },
      ],
    },
  ];

  const getLevelKeys = (items1) => {
     console.log(items1)
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeys = getLevelKeys(items);
const SideBar = () => {
    const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
    const navigate = useNavigate();

    const onMenuClick = (e)=>{
        console.log(e)
        const x = (e.domEvent.target )['innerText'];
        if(x) {
          return navigate(`/${x}`)
        }
    
        const func = (items)=>{
          const filterItems = items.filter(item =>item.key === e.keyPath[1])
          console.log(filterItems)
          items.forEach((item) => {
            if (item.key === e.keyPath[1]) {
              console.log(item.children)
              // item?.children.map((child:any)=>{
              //   <Link to={`/${child.label}`} />
              // })
            }
          })
        }
        const getChildrenPath = func(items);
      }

    const onOpenChange = (openKeys) => {
        console.log(openKeys)
      const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
      // open
      if (currentOpenKey !== undefined) {
        const repeatIndex = openKeys
          .filter((key) => key !== currentOpenKey)
          .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
        setStateOpenKeys(
          openKeys
            // remove repeat key
            .filter((_, index) => index !== repeatIndex)
            // remove current level all child
            .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
        );
      } else {
        // close
        setStateOpenKeys(openKeys);
      }
    };

  return (
    <div>
      <Menu
      mode="inline"
      defaultSelectedKeys={['231']}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
      onClick={onMenuClick}
    />
    </div>
  )
}

export default SideBar

