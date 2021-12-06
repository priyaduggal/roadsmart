import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'date-time',
        loadChildren: () => import('../date-time/date-time.module').then(m => m.DateTimePageModule)
      },
      {
        path: 'my-cars',
        loadChildren: () => import('../my-cars/my-cars.module').then(m => m.MyCarsPageModule)
      },   
	  {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
      },
	 {
        path: 'vehicle-modal-year',
        loadChildren: () => import('../vehicle-modal-year/vehicle-modal-year.module').then(m => m.VehicleModalYearPageModule)
      },
	  {
        path: 'vehicle-model',
        loadChildren: () => import('../vehicle-model/vehicle-model.module').then(m => m.VehicleModelPageModule)
      },
	  {
        path: 'vehicle-make',
        loadChildren: () => import('../vehicle-make/vehicle-make.module').then(m => m.VehicleMakePageModule)
      },
	  {
        path: 'vehicle-engine',
        loadChildren: () => import('../vehicle-engine/vehicle-engine.module').then(m => m.VehicleEnginePageModule)
      },  
	  {
        path: 'my-orders',
        loadChildren: () => import('../my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
      },	  
	  {
        path: 'order-details',
        loadChildren: () => import('../order-details/order-details.module').then(m => m.OrderDetailsPageModule)
      },  
	  {
        path: 'sub-services',
        loadChildren: () => import('../sub-services/sub-services.module').then(m => m.SubServicesPageModule)
      },
	  {
        path: 'estimated-places',
        loadChildren: () => import('../estimated-places/estimated-places.module').then(m => m.EstimatedPlacesPageModule)
      },
	  {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
	  {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
      },
	  {
        path: 'requests',
        loadChildren: () => import('../requests/requests.module').then(m => m.RequestsPageModule)
      },
	  {
        path: 'more',
        loadChildren: () => import('../more/more.module').then(m => m.MorePageModule)
      }, 
	  {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then(m => m.MessagesPageModule)
      },
	    {
        path: 'sub-services-quick-links',
        loadChildren: () => import('../sub-services-quick-links/sub-services-quick-links.module').then(m => m.SubServicesQuickLinksPageModule)
      },
	   {
        path: 'notes',
        loadChildren: () => import('../notes/notes.module').then(m => m.NotesPageModule)
      },
	  {
        path: 'summary-of-orders',
        loadChildren: () => import('../summary-of-orders/summary-of-orders.module').then(m => m.SummaryOfOrdersPageModule)
      },
	   {
        path: 'submittherequest',
        loadChildren: () => import('../submittherequest/submittherequest.module').then(m => m.SubmittherequestPageModule)
      },
	  {
        path: 'vendor-profile',
        loadChildren: () => import('../vendor-profile/vendor-profile.module').then(m => m.VendorProfilePageModule)
      },
	  {
        path: 'insurance',
        loadChildren: () => import('../insurance/insurance.module').then(m => m.InsurancePageModule)
      },
	 {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },	 {
        path: 'car-details',
        loadChildren: () => import('../car-details/car-details.module').then(m => m.CarDetailsPageModule)
      },
	 {
        path: 'sub-services-part',
        loadChildren: () => import('../sub-services-part/sub-services-part.module').then(m => m.SubServicesPartPageModule)
      },
	   {
        path: 'sub-services-electrical',
        loadChildren: () => import('../sub-services-electrical/sub-services-electrical.module').then(m => m.SubServicesElectricalPageModule)
      },   
	  {
        path: 'insurance-edit',
        loadChildren: () => import('../insurance-edit/insurance-edit.module').then(m => m.InsuranceEditPageModule)
      },  
	  {
        path: 'viewdetail',
        loadChildren: () => import('../viewdetail/viewdetail.module').then(m => m.ViewdetailPageModule)
      },
	   {
        path: 'productorderdetail',
        loadChildren: () => import('../productorderdetail/productorderdetail.module').then(m => m.ProductorderdetailPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
