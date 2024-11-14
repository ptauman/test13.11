import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import socket from '../socket/socket';

export function useMissileSocket() {
  const dispatch = useDispatch();

  const joinRoom = (data: JoinRoomData) => {
    socket.emit('join_defense_area', data);
  };

  const joinAllRooms = (data: JoinAllRoomsData) => {
    socket.emit('join_all_rooms', data);
  };

  const launchMissile = (data: MissileLaunchData) => {
    socket.emit('launch_missile', data);
  };

  const interceptMissile = (data: MissileInterceptData) => {
    socket.emit('intercept_missile', data);
  };

  useEffect(() => {
    return () => {
      socket.off('join_defense_area');
      socket.off('join_all_rooms');
      socket.off('launch_missile');
      socket.off('intercept_missile');
    };
  }, [])

  return { joinRoom, joinAllRooms, launchMissile, interceptMissile };
}