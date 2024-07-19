import { lazy } from 'react';

const privacypolicy = lazy(
  () => import('../components/home/PrivacyPolicy/Index.tsx'),
);

const balance = lazy(() => import('../pages/Dashboard/Balance.tsx'));

const branchcreate = lazy(() => import('../components/Branch/All.tsx'));
// const productform = lazy(() => import('../components/Branch/Form'));
const operatorAll = lazy(() => import('../components/operator/CreateForm.tsx'));
const operatorCreate = lazy(() => import('../components/operator/Form.tsx'));
// edit routes

// product routes

const editProduct = lazy(() => import('../components/products/EditProduct'));
const productsAll = lazy(() => import('../components/products/All.tsx'));
const productForm = lazy(() => import('../components/products/Form'));
const detailsProduct = lazy(
  () => import('../components/products/DetailsProduct'),
);

// branches

const branchDetails = lazy(() => import('../components/Branch/Details'));
const branchEdit = lazy(() => import('../components/Branch/Edit.tsx'));
const branchform = lazy(() => import('../components/Branch/Create.tsx'));

//  operatore
const operatorDetails = lazy(
  () => import('../components/operator/Details.tsx'),
);

const operatorEdit = lazy(
  () => import('../components/operator/EditOperator.tsx'),
);

//partner

const partnerform = lazy(() => import('../components/Partnerr/Form.tsx'));

const category = lazy(() => import('../components/products/Category.tsx'));
const myProfile = lazy(() => import('../pages/settings/MyProfile.tsx'));

const coreRoutes = [
  {
    path: '/admin/settings',
    title: 'myProfile',
    component: myProfile,
  },

  {
    path: '/admin/branch/details/:id',
    title: 'branchDetails',
    component: branchDetails,
  },
  {
    path: '/admin/branch/create',
    title: 'branchform',
    component: branchform,
  },
  {
    path: '/admin/branch/edit/:id',
    title: 'branchEdit',
    component: branchEdit,
  },

  {
    path: '/admin/product/edit/:id',
    title: 'editProduct',
    component: editProduct,
  },

  {
    path: '/admin/product/all',
    title: 'productsAll',
    component: productsAll,
  },

  {
    path: '/admin/product/create/',
    title: 'productForm',
    component: productForm,
  },
  {
    path: '/admin/category/all',
    title: 'category',
    component: category,
  },
  {
    path: '/admin/product/details/:id',
    title: 'detailsProduct',
    component: detailsProduct,
  },
  {
    path: '/admin/branch/all',
    title: 'branchcreate',
    component: branchcreate,
  },

  {
    path: '/admin/operator/all',
    title: 'operatorAll',
    component: operatorAll,
  },
  {
    path: '/admin/operator/create',
    title: 'operatorCreate',
    component: operatorCreate,
  },
  {
    path: '/admin/pageland',
    title: 'pageland',
    component: operatorCreate,
  },
  {
    path: '/admin/operator/edit/:id',
    title: 'operatorEdit',
    component: operatorEdit,
  },
  {
    path: '/admin/operator/details/:id',
    title: 'operatorDetails',
    component: operatorDetails,
  },
  {
    path: '/admin/partnerform',
    title: 'partnerform',
    component: partnerform,
  },
  {
    path: '/admin/balance',
    title: 'balance',
    component: balance,
  },
];

const routes = [...coreRoutes];
export default routes;
