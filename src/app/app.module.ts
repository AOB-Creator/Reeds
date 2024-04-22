import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FooterComponent,
    MainComponent,
    AboutusComponent,
    Page404Component,
    NavigationComponent,
    DetailedInformationComponent,
    ProductsComponent,
    FeatureSectionComponent,
    FeatureSection2Component,
    TrustedByComponent,
    DeployYourAppComponent,
    PricelistComponent,
    HeaderSectionsComponent,
    SubscribeOurLetterComponent,
    StatsComponent,
    TestimonialsComponent,
    BlogsComponent,
    ContentSectionComponent,
    ContactSectionComponent,
    PorductsOverviewComponent,
    ProductListsComponent,
    QuickPrevComponent,
    PromoSectionComponent,
    ProFeaturesComponent,
    DesignedInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
