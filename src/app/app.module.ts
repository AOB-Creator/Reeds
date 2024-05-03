import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { Page404Component } from './pages/page404/page404.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { ProductsComponent } from './pages/products/products.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { FeatureSection2Component } from './components/feature-section2/feature-section2.component';
import { TrustedByComponent } from './components/trusted-by/trusted-by.component';
import { DeployYourAppComponent } from './components/deploy-your-app/deploy-your-app.component';
import { PricelistComponent } from './components/pricelist/pricelist.component';
import { HeaderSectionsComponent } from './components/header-sections/header-sections.component';
import { SubscribeOurLetterComponent } from './components/subscribe-our-letter/subscribe-our-letter.component';
import { StatsComponent } from './components/stats/stats.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { PorductsOverviewComponent } from './components/porducts-overview/porducts-overview.component';
import { ProductListsComponent } from './components/product-lists/product-lists.component';
import { QuickPrevComponent } from './components/quick-prev/quick-prev.component';
import { PromoSectionComponent } from './components/promo-section/promo-section.component';
import { ProFeaturesComponent } from './components/pro-features/pro-features.component';
import { DesignedInfoComponent } from './components/designed-info/designed-info.component';
import { AboutMapComponent } from './components/about-map/about-map.component';
import { ContactWithUsComponent } from './pages/contact-with-us/contact-with-us.component';
import { ImportantDatesComponent } from './components/important-dates/important-dates.component';
import { BrandingCompaniesComponent } from './components/branding-companies/branding-companies.component';
import { AboutStepsComponent } from './components/about-steps/about-steps.component';
import { NewsAboutUsComponent } from './components/news-about-us/news-about-us.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SharedModule } from './pages/shared/shared.module';
import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';
import { CareersComponent } from './pages/careers/careers.component';
import { IkeaAnimationComponent } from './components/ikea-animation/ikea-animation.component';
import { DecoorationComponent } from './pages/decooration/decooration.component';
import { SliderDekorComponent } from './components/slider-dekor/slider-dekor.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterCardsComponent } from './components/filter-cards/filter-cards.component';
import { CareerApthwayComponent } from './components/career-apthway/career-apthway.component';
import { WantedCardsComponent } from './components/wanted-cards/wanted-cards.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ReferenceComponent } from './pages/reference/reference.component';
import { TourismComponent } from './pages/tourism/tourism.component';
import { StayUpToDateComponent } from './components/stay-up-to-date/stay-up-to-date.component';
import { QrCodeModule } from 'ng-qrcode';
import { NgMagnizoomModule } from 'ng-magnizoom';
import { TestComponent } from './components/test/test.component';
import { CareersModule } from './pages/modules/careers/careers.module';
import { DecorationModule } from './pages/modules/decoration/decoration.module';
import { AboutusModule } from './pages/modules/aboutus/aboutus.module';
import { NgOptimizedImage } from '@angular/common';
import { DecorCardsComponent } from './components/decor-cards/decor-cards.component';
import { PlitaCardsComponent } from './components/plita-cards/plita-cards.component';
import { MeetOurLeadersComponent } from './components/meet-our-leaders/meet-our-leaders.component';
import { AnimatedcardsComponent } from './components/animatedcards/animatedcards.component';
import { MatrixComponent } from './components/matrix/matrix.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionsComponent,
    SubscribeOurLetterComponent,
    ContactSectionComponent,
    ContactWithUsComponent,
    AboutStepsComponent,
    NewsAboutUsComponent,
    CareerApthwayComponent,
    DecoorationComponent,
    CardsComponent,
    FooterComponent,
    MainComponent,
    Page404Component,
    NavigationComponent,
    DetailedInformationComponent,
    ProductsComponent,
    FeatureSectionComponent,
    FeatureSection2Component,
    TrustedByComponent,
    DeployYourAppComponent,
    PricelistComponent,
    StatsComponent,
    TestimonialsComponent,
    BlogsComponent,
    ContentSectionComponent,
    PorductsOverviewComponent,
    ProductListsComponent,
    QuickPrevComponent,
    PromoSectionComponent,
    ProFeaturesComponent,
    DesignedInfoComponent,
    AboutMapComponent,
    ImportantDatesComponent,
    BrandingCompaniesComponent,
    LoadingComponent,
    LangSelectorComponent,
    CareersComponent,
    IkeaAnimationComponent,
    DecoorationComponent,
    SliderDekorComponent,
    ProductCardComponent,
    FilterCardsComponent,
    WantedCardsComponent,
    GalleryComponent,
    PricelistComponent,
    ReferenceComponent,
    TourismComponent,
    StayUpToDateComponent,
    TestComponent,
    AboutusComponent,
    DecorCardsComponent,
    PlitaCardsComponent,
    MeetOurLeadersComponent,
    AnimatedcardsComponent,
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterLink,
    QrCodeModule,
    NgxImageZoomModule,
    NgMagnizoomModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
