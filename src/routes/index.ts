import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));

const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const privacypolicy = lazy(() => import('../components/PageIndex/PrivacyPoilcy.tsx'));



const branchcreate = lazy(() => import('../components/Branch/CreateForm'));
const productform = lazy(() => import('../components/Branch/Form'));
const servicesCreate = lazy(() => import('../components/operator/CreateForm.tsx'));
const servicesForm = lazy(() => import('../components/operator/Form.tsx'));
// edit routes

const editMember = lazy(() => import('../components/Member/EditForm'));
const details = lazy(() => import('../components/Member/Details'));
const CreateForm = lazy(() => import('../components/Member/CreateForm'));
const Form = lazy(() => import('../components/Member/Form'));
// product routes

const editProduct = lazy(() => import('../components/products/EditProduct'));
const productCreate = lazy(() => import('../components/products/CreateForm'));
const productForm = lazy(() => import('../components/products/Form'));
const detailsProduct = lazy(() => import('../components/products/Details'));


// branches 

const branchDetails = lazy(() => import('../components/Branch/Details'));
const branchEdit = lazy(() => import('../components/Branch/EditPartner.tsx'));
const branchform = lazy(() => import('../components/Branch/Form.tsx'));

//  operatore
const operatorDetails = lazy(() => import('../components/operator/Details.tsx'));
const operatorEdit = lazy(() => import('../components/operator/EditOperator.tsx'));

//partner 

const partnerform = lazy(() => import('../components/Partnerr/Form.tsx'));


const coreRoutes = [
  {
    path: '/admin/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/admin/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/admin/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/admin/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/admin/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/admin/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/admin/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/admin/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/admin/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path: '/admin/branchDetails',
    title: 'branchDetails',
    component: branchDetails,
  },
  {
    path: '/admin/branchform',
    title: 'branchform',
    component: branchform,
  },
  {
    path: '/admin/branchEdit/:id',
    title: 'branchEdit',
    component: branchEdit,
  },
 
  {
    path: '/admin/createForm',
    title: 'createForm',
    component: CreateForm,
  },
  {
    path: '/admin/editMember/:id',
    title: 'editMember',
    component: editMember,
  },
  {
    path: '/admin/editProduct',
    title: 'editProduct',
    component: editProduct,
  },
  {
    path: '/admin/member/details/:id',
    title: 'details',
    component: details,
  },
  {
    path: '/admin/Form',
    title: 'Form',
    component: Form,
  },
  {
    path: '/admin/productCreate',
    title: 'productCreate',
    component: productCreate,
  },

  {
    path: '/admin/productForm',
    title: 'productForm',
    component: productForm,
  },
  {
    path: '/admin/detailsProduct',
    title: 'detailsProduct',
    component: detailsProduct,
  },
  {
    path: '/admin/branchcreate',
    title: 'branchcreate',
    component: branchcreate,
  },
  {
    path: '/admin/productform',
    title: 'productform',
    component: productform,
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
    path: '/admin/operatorEdit',
    title: 'operatorEdit',
    component: operatorEdit,
  },
  {
    path: '/admin/operatorDetails',
    title: 'operatorDetails',
    component: operatorDetails,
  },
  {
    path: '/admin/partnerform',
    title: 'partnerform',
    component: partnerform,
  }
  
];

const routes = [...coreRoutes];
export default routes;
