// src/components/Badge.tsx

import React from 'react';
import { 
    FaStar, 
    FaCheck,          
    FaExclamationTriangle, 
    FaUser,           
    FaBell 
} from 'react-icons/fa'; 

// تحديد الأنواع
type BadgeColor = 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'new';
type IconName = 'star' | 'check' | 'alert' | 'user' | 'bell';

interface BadgeProps {
  color: BadgeColor;
  iconName: IconName;
  children: React.ReactNode; 
  isFloating?: boolean; // خاصية جديدة لتحديد ما إذا كانت طافية
}

const getColorClass = (color: BadgeColor): string => {
  switch (color) {
    case 'new': return 'badge-new'; // اللون الجديد
    case 'primary': return 'badge-blue';
    case 'success': return 'badge-green';
    case 'danger': return 'badge-red';
    case 'warning': return 'badge-yellow';
    case 'info': return 'badge-purple';
    default: return 'badge-gray';
  }
};

const getIconComponent = (name: IconName): React.ElementType | null => {
  switch (name) {
    case 'star': return FaStar;
    case 'check': return FaCheck;
    case 'alert': return FaExclamationTriangle;
    case 'user': return FaUser;
    case 'bell': return FaBell;
    default: return null;
  }
};

const Badge: React.FC<BadgeProps> = ({ color, iconName, children, isFloating = false }) => {
  const colorClass = getColorClass(color);
  const IconComponent = getIconComponent(iconName); 
  
  // دمج الفئات: base class + color class + floating class (إذا لزم الأمر)
  const badgeClasses = `badge ${colorClass} ${isFloating ? 'badge-floating' : ''}`; 

  return (
    <span className={badgeClasses}>
      {IconComponent && (
        <IconComponent className="badge-icon" size={12} /> 
      )}
      {children}
    </span>
  );
};

export default Badge;