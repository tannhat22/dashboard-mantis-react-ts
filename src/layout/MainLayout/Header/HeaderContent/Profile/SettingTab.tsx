import { useState } from 'react';

// material-ui
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import {
  CommentOutlined,
  LockOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

const SettingTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <QuestionCircleOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </ListItemIcon>
        <ListItemText primary="Support" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <UserOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        </ListItemIcon>
        <ListItemText primary="Account Settings" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 2)}
      >
        <ListItemIcon>
          <LockOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        </ListItemIcon>
        <ListItemText primary="Privacy Center" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 3}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 3)}
      >
        <ListItemIcon>
          <CommentOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        </ListItemIcon>
        <ListItemText primary="Feedback" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 4}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => handleListItemClick(event, 4)}
      >
        <ListItemIcon>
          <UnorderedListOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItemButton>
    </List>
  );
};

export default SettingTab;
