import React, { ReactNode } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, DropdownProps } from 'antd';

interface MenuItemsProps extends DropdownProps {
    items: MenuProps['items'],
    children: ReactNode
}

const DropdownComponent : React.FC<MenuItemsProps> = ({ children, items, ...props }) => (
    <Dropdown menu={{ items }} {...props}>
        {children}
    </Dropdown>
);

export default DropdownComponent;
