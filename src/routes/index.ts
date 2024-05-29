import { lazy } from 'react';



const privacypolicy = lazy(() => import('../components/home/PrivacyPolicy/Index.tsx'));

const balance = lazy(() => import('../pages/Dashboard/Balance.tsx'));

const branchcreate = lazy(() => import('../components/Branch/All.tsx'));
// const productform = lazy(() => import('../components/Branch/Form'));
const servicesCreate = lazy( () => import('../components/operator/CreateForm.tsx'),
);
const servicesForm = lazy(() => import('../components/operator/Form.tsx'));
// edit routes

const editMember = lazy(() => import('../components/Member/Edit.tsx'));
const details = lazy(() => import('../components/Member/Details'));
const CreateForm = lazy(() => import('../components/Member/All.tsx'));
const Form = lazy(() => import('../components/Member/Create.tsx'));
// product routes

const editProduct = lazy(() => import('../components/products/EditProduct'));
const productCreate = lazy(() => import('../components/products/CreateForm'));
const productForm = lazy(() => import('../components/products/Form'));
const detailsProduct = lazy(() => import('../components/products/Details'));

// branches

const branchDetails = lazy(() => import('../components/Branch/Details'));
const branchEdit = lazy(() => import('../components/Branch/Edit.tsx'));
const branchform = lazy(() => import('../components/Branch/Form.tsx'));

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
    path: '/admin/details/:id',
    title: 'branchDetails',
    component: branchDetails,
  },
  {
    path: '/admin/branch/create',
    title: 'branchform',
    component: branchform,
  },
  {
    path: '/admin/branchEdit/:id',
    title: 'branchEdit',
    component: branchEdit,
  },

  {
    path: '/admin/member',
    title: 'createForm',
    component: CreateForm,
  },
  {
    path: '/admin/editMember/:id',
    title: 'editMember',
    component: editMember,
  },
  {
    path: '/admin/editproduct/:id',
    title: 'editProduct',
    component: editProduct,
  },
  {
    path: '/admin/member/details/:id',
    title: 'details',
    component: details,
  },
  {
    path: '/admin/member/create',
    title: 'Form',
    component: Form,
  },
  {
    path: '/admin/productCreate',
    title: 'productCreate',
    component: productCreate,
  },

  {
    path: '/admin/productForm/:id',
    title: 'productForm',
    component: productForm,
  },
  {
    path: '/admin/category',
    title: 'category',
    component: category,
  },
  {
    path: '/admin/detailsproduct/:id',
    title: 'detailsProduct',
    component: detailsProduct,
  },
  {
    path: '/admin/branchcreate',
    title: 'branchcreate',
    component: branchcreate,
  },

  {
    path: '/admin/servicesCreate',
    title: 'servicesCreate',
    component: servicesCreate,
  },
  {
    path: '/admin/servicesForm',
    title: 'servicesForm',
    component: servicesForm,
  },
  {
    path: '/admin/pageland',
    title: 'pageland',
    component: servicesForm,
  },
  {
    path: '/admin/operatoredit/:id',
    title: 'operatorEdit',
    component: operatorEdit,
  },
  {
    path: '/admin/operatordetails/:id',
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
