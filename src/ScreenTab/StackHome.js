import React, {Component} from 'react';
import { createTabNavigator ,createStackNavigator } from 'react-navigation'
import BachHoaXanhChinhHang from '../ScreenStack/BachHoaXanhChinhHang'
import KhuyenMai from '../ScreenStack/KhuyenMai'
import MaGiamGia from '../ScreenStack/MaGiamGia'
import NapTheDichVu from '../ScreenStack/NapTheDichVu'
import NhanHang4gio from '../ScreenStack/NhanHang4gio'
import PhongCachGioiTre from '../ScreenStack/PhongCachGioiTre'
import ReVoDich from '../ScreenStack/ReVoDich'
import SanXuMoiNgay from '../ScreenStack/SanXuMoiNgay'
import ShopeeForMen from '../ScreenStack/ShopeeForMen'
import SieuThiDienTu from '../ScreenStack/SieuThiDienTu'

const StackHome = createStackNavigator({
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
  export default StackHome