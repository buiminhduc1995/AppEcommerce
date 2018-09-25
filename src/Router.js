import React, {Component} from 'react';
import { createTabNavigator ,createStackNavigator } from 'react-navigation'
import Home from './ScreenTab/Home'
import Dao from './ScreenTab/Dao'
import Mall from './ScreenTab/Mall'
import Notification from './ScreenTab/Notification'
import User from './ScreenTab/User'
import BachHoaXanhChinhHang from './ScreenStack/BachHoaXanhChinhHang'
import KhuyenMai from './ScreenStack/KhuyenMai'
import MaGiamGia from './ScreenStack/MaGiamGia'
import NapTheDichVu from './ScreenStack/NapTheDichVu'
import NhanHang4gio from './ScreenStack/NhanHang4gio'
import PhongCachGioiTre from './ScreenStack/PhongCachGioiTre'
import ReVoDich from './ScreenStack/ReVoDich'
import SanXuMoiNgay from './ScreenStack/SanXuMoiNgay'
import ShopeeForMen from './ScreenStack/ShopeeForMen'
import SieuThiDienTu from './ScreenStack/SieuThiDienTu'
import { Ionicons, Entypo } from '@expo/vector-icons';
const StackHome = createStackNavigator({
    Home:{screen:Home},
    BachHoaXanhChinhHang:{screen:BachHoaXanhChinhHang},
    KhuyenMai:{screen:KhuyenMai},
    MaGiamGia:{screen:MaGiamGia},
    NapTheDichVu:{screen:NapTheDichVu},
    NhanHang4gio:{screen:NhanHang4gio},
    PhongCachGioiTre:{screen:PhongCachGioiTre},
    ReVoDich:{screen:ReVoDich},
    SanXuMoiNgay:{screen:SanXuMoiNgay},
    ShopeeForMen:{screen:ShopeeForMen},
    SieuThiDienTu:{screen:SieuThiDienTu}, 
  })
const Tab = createTabNavigator({
    Home: {
        screen: StackHome,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Entypo name="home" size={20} color="white" />
        }
    },
    Dao: {
        screen: Dao,
        navigationOptions: {
            tabBarLabel: 'Dạo',
            tabBarIcon: ({ tintColor }) => <Entypo name="home" size={20} color="white" />
        }
    },
    Mall: {
        screen: Mall,
        navigationOptions: {
            tabBarLabel: 'Mall',
            tabBarIcon: ({ tintColor }) => <Entypo name="home" size={20} color="white" />
        }
    },
    Notification: {
        screen: Notification,
        navigationOptions: {
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({ tintColor }) => <Entypo name="home" size={20} color="white" />
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: 'Tôi',
            tabBarIcon: ({ tintColor }) => <Entypo name="home" size={20} color="white" />
        }},
    },{
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
          style: {
            backgroundColor: '#124c7d'
          },
          labelStyle: {
            fontSize: 6,
            color: "white"
          },
          showIcon: true,
          showLabel:true,
          inactiveTintColor: 'white',
          activeTinColor: '#1e67a6'
        }
      })

export default Tab