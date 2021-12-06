import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sub-services',
    loadChildren: () => import('./sub-services/sub-services.module').then( m => m.SubServicesPageModule)
  },
  {
    path: 'estimated-places',
    loadChildren: () => import('./estimated-places/estimated-places.module').then( m => m.EstimatedPlacesPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'my-cars',
    loadChildren: () => import('./my-cars/my-cars.module').then( m => m.MyCarsPageModule)
  },
  {
    path: 'vehicle-modal-year',
    loadChildren: () => import('./vehicle-modal-year/vehicle-modal-year.module').then( m => m.VehicleModalYearPageModule)
  },
  {
    path: 'vehicle-model',
    loadChildren: () => import('./vehicle-model/vehicle-model.module').then( m => m.VehicleModelPageModule)
  },
  {
    path: 'vehicle-make',
    loadChildren: () => import('./vehicle-make/vehicle-make.module').then( m => m.VehicleMakePageModule)
  },
  {
    path: 'vehicle-engine',
    loadChildren: () => import('./vehicle-engine/vehicle-engine.module').then( m => m.VehicleEnginePageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'sub-services-quick-links',
    loadChildren: () => import('./sub-services-quick-links/sub-services-quick-links.module').then( m => m.SubServicesQuickLinksPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'summary-of-orders',
    loadChildren: () => import('./summary-of-orders/summary-of-orders.module').then( m => m.SummaryOfOrdersPageModule)
  },
  {
    path: 'submittherequest',
    loadChildren: () => import('./submittherequest/submittherequest.module').then( m => m.SubmittherequestPageModule)
  },
  {
    path: 'vendor-profile',
    loadChildren: () => import('./vendor-profile/vendor-profile.module').then( m => m.VendorProfilePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'insurance',
    loadChildren: () => import('./insurance/insurance.module').then( m => m.InsurancePageModule)
  },
  {
    path: 'car-details',
    loadChildren: () => import('./car-details/car-details.module').then( m => m.CarDetailsPageModule)
  },
  {
    path: 'insurance-edit',
    loadChildren: () => import('./insurance-edit/insurance-edit.module').then( m => m.InsuranceEditPageModule)
  },
  {
    path: 'changevehicle',
    loadChildren: () => import('./changevehicle/changevehicle.module').then( m => m.ChangevehiclePageModule)
  },
  {
    path: 'renewableservices',
    loadChildren: () => import('./renewableservices/renewableservices.module').then( m => m.RenewableservicesPageModule)
  },
  {
    path: 'carlicensing',
    loadChildren: () => import('./carlicensing/carlicensing.module').then( m => m.CarlicensingPageModule)
  },
  {
    path: 'carinsurance',
    loadChildren: () => import('./carinsurance/carinsurance.module').then( m => m.CarinsurancePageModule)
  },
  {
    path: 'carvehicleinfo',
    loadChildren: () => import('./carvehicleinfo/carvehicleinfo.module').then( m => m.CarvehicleinfoPageModule)
  },
  {
    path: 'sub-services-part',
    loadChildren: () => import('./sub-services-part/sub-services-part.module').then( m => m.SubServicesPartPageModule)
  },
  {
    path: 'sub-services-electrical',
    loadChildren: () => import('./sub-services-electrical/sub-services-electrical.module').then( m => m.SubServicesElectricalPageModule)
  },
  {
    path: 'viewdetail',
    loadChildren: () => import('./viewdetail/viewdetail.module').then( m => m.ViewdetailPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'productdetails',
    loadChildren: () => import('./productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  },
  {
    path: 'productcart',
    loadChildren: () => import('./productcart/productcart.module').then( m => m.ProductcartPageModule)
  },
  {
    path: 'productcheckout',
    loadChildren: () => import('./productcheckout/productcheckout.module').then( m => m.ProductcheckoutPageModule)
  },
  {
    path: 'productwishlist',
    loadChildren: () => import('./productwishlist/productwishlist.module').then( m => m.ProductwishlistPageModule)
  },
  {
    path: 'productorderdetail',
    loadChildren: () => import('./productorderdetail/productorderdetail.module').then( m => m.ProductorderdetailPageModule)
  },
  {
    path: 'productfilters',
    loadChildren: () => import('./productfilters/productfilters.module').then( m => m.ProductfiltersPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
