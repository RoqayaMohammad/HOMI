import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SelectDropDownModule } from 'ngx-select-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { DealInThisWeekComponent } from './components/common/deal-in-this-week/deal-in-this-week.component';
import { FacilityStyleTwoComponent } from './components/common/facility-style-two/facility-style-two.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';

import { FooterComponent } from './components/common/footer/footer.component';

import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { OrderTrackingPageComponent } from './components/pages/order-tracking-page/order-tracking-page.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { TrendingProductsComponent } from './components/common/trending-products/trending-products.component';
import { PopularProductsComponent } from './components/common/popular-products/popular-products.component';
import { NewProductsComponent } from './components/common/new-products/new-products.component';
import { DiscountComponent } from './components/common/discount/discount.component';
import { SimpleProductPageComponent } from './components/pages/simple-product-page/simple-product-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { ShopLeftSidebarPageTwoComponent } from './components/pages/shop-left-sidebar-page-two/shop-left-sidebar-page-two.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductItemComponent } from './components/pages/product-item/product-item.component'
import { CoreRoutingModule } from './core/core-routing.module';
import { ShopRoutingModule } from './shop/shop-routing.module';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { PagingHeaderComponent } from './components/common/paging-header/paging-header.component';
import { ServerErrorPageComponent } from './components/pages/server-error-page/server-error-page.component';
import { ErrorsComponent } from './components/pages/errors/errors.component';
import { ErrorInterceptor } from './core/Innterceptors/error.interceptor';
import { LoginComponent } from './components/pages/my-account-page/login/login.component';
import { RegisterComponent } from './components/pages/my-account-page/register/register.component';
import { JwtInterceptor } from './core/Innterceptors/jwt.interceptor';
import { CheckoutSuccessComponent } from './components/pages/checkout-page/checkout-success/checkout-success.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { OrderDetailedComponent } from './components/pages/orders/order-detailed/order-detailed.component';
import { SidebarComponent } from './components/AdminPages/sidebar/sidebar.component';
import { ProductsComponent } from './components/AdminPages/products/products.component';
import { StylesComponent } from './components/AdminPages/styles/styles.component';
import { BrandsComponent } from './components/AdminPages/brands/brands.component';
import { ColorsComponent } from './components/AdminPages/colors/colors.component';
import { CategoriesComponent } from './components/AdminPages/categories/categories.component';
import { AddProductComponent } from './components/AdminPages/products/add-product/add-product.component';
import { ProductDetailsComponent } from './components/AdminPages/products/product-details/product-details.component';
import { UpdatedProductComponent } from './components/AdminPages/products/updated-product/updated-product.component';
import { UpdatedCategoryComponent } from './components/AdminPages/categories/updated-category/updated-category.component';
import { AddCategoryComponent } from './components/AdminPages/categories/add-category/add-category.component';
import { AddBrandComponent } from './components/AdminPages/brands/add-brand/add-brand.component';
import { UpdatedBrandComponent } from './components/AdminPages/brands/updated-brand/updated-brand.component';
import { UpdatedColorComponent } from './components/AdminPages/colors/updated-color/updated-color.component';
import { AddColorComponent } from './components/AdminPages/colors/add-color/add-color.component';
import { AddStyleComponent } from './components/AdminPages/styles/add-style/add-style.component';
import { UpdatedStyleComponent } from './components/AdminPages/styles/updated-style/updated-style.component';
import { RouterModule } from '@angular/router';
import { ForgotPaswordComponent } from './components/pages/my-account-page/forgot-pasword/forgot-pasword.component';



@NgModule({
  declarations: [
    AppComponent,

    ContactPageComponent,

    HomeDemoTwoComponent,


    NavbarStyleTwoComponent,

    PartnerComponent,
    TestimonialsComponent,

    DealInThisWeekComponent,
    FacilityStyleTwoComponent,

    HometwoBannerComponent,

    FooterComponent,

    NotFoundPageComponent,


    OrderTrackingPageComponent,
    MyAccountPageComponent,


    TrendingProductsComponent,
    PopularProductsComponent,
    NewProductsComponent,
    DiscountComponent,
    SimpleProductPageComponent,

    CartPageComponent,
    CheckoutPageComponent,
    WishlistPageComponent,
    AboutPageComponent,

    WhyChooseUsComponent,

    ShopLeftSidebarPageTwoComponent,

    ProductItemComponent,
    PagingHeaderComponent,
    ServerErrorPageComponent,
    ErrorsComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutSuccessComponent,
    OrdersComponent,
    OrderDetailedComponent,
    SidebarComponent,
    ProductsComponent,
    StylesComponent,
    BrandsComponent,
    ColorsComponent,
    CategoriesComponent,
    AddProductComponent,
    ProductDetailsComponent,
    UpdatedProductComponent,
    UpdatedCategoryComponent,
    AddCategoryComponent,
    AddBrandComponent,
    UpdatedBrandComponent,
    UpdatedColorComponent,
    AddColorComponent,
    AddStyleComponent,
    UpdatedStyleComponent,
    ForgotPaswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxScrollTopModule,
    FormsModule,
    NgxPaginationModule,
    SelectDropDownModule,
    HttpClientModule,
    CoreRoutingModule,
    ShopRoutingModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxScrollTopModule,
    FormsModule,
    NgxPaginationModule,
    SelectDropDownModule,
    HttpClientModule,
    CoreRoutingModule,
    ShopRoutingModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
