import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import socket from '../socket/socket';
import { addMissile, reducerMissile} from '../features/missilesSlice';

export function useMissileSocket() {
  const dispatch = useDispatch();

  const joinRoom = (data: JoinRoomData) => {
    socket.emit('join_defense_area', data);
  };

  // פונקציה לחיבור משתמש לכל החדרים
  const joinAllRooms = (data: JoinAllRoomsData) => {
    socket.emit('join_all_rooms', data);
  };

  // פונקציה לשיגור טיל
  const launchMissile = (data: MissileLaunchData) => {
    socket.emit('launch_missile', data);
  };

  // פונקציה לשיגור טיל יירוט
  const interceptMissile = (data: MissileInterceptData) => {
    socket.emit('intercept_missile', data);
  };

  useEffect(() => {
    // ניקוי המאזינים ל-WebSocket כאשר ה-hook מתנתק
    return () => {
      socket.off('join_defense_area');
      socket.off('join_all_rooms');
      socket.off('launch_missile');
      socket.off('intercept_missile');
    };
  }, [])

  return { joinRoom, joinAllRooms, launchMissile, interceptMissile };
}