import logo from './logo.svg';
import './App.css';
import SupplierList from './components/SupplierList';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import SupplierDetail from './components/SupplierDetail';
import CategoryDetail from './components/CategoryDetail';



const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div >
      <Layout>
        
        <BrowserRouter>

          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to='/ProductList'>Products</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/SupplierList'>Suppliers</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/CategoryList'>Categories</Link></Menu.Item>
            </Menu>
          </Header>

          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

              <Switch>
                <Route path='/Productlist'>
                  <ProductList></ProductList>
                </Route>
                <Route path='/SupplierList'>
                  <SupplierList></SupplierList>
                </Route>
                <Route path='/CategoryList'>
                  <CategoryList></CategoryList>
                </Route>
                <Route path='/ProductDetail/:id'>
                  <ProductDetail></ProductDetail>
                </Route>
                <Route path='/SupplierDetail/:id'>
                  <SupplierDetail></SupplierDetail>
                </Route>
                <Route path='/CategoryDetail/:id'>
                  <CategoryDetail></CategoryDetail>
                </Route>

              </Switch>

            </div>
          </Content>
        </BrowserRouter>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
    </div>
  );
}

export default App;
