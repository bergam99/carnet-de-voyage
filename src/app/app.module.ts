import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// cp
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { DernierArticleComponent } from './components/dernier-article/dernier-article.component';
import { LienVersLesAutresArticlesComponent } from './components/lien-vers-les-autres-articles/lien-vers-les-autres-articles.component';
import { ButtonRetourComponent } from './components/button-retour/button-retour.component';
import { VoyageSummeryComponent } from './components/voyage-summery/voyage-summery.component';
import { AvisComponent } from './components/avis/avis.component';
import { PourVoyagerUnPeuPlusComponent } from './components/pour-voyager-un-peu-plus/pour-voyager-un-peu-plus.component';

// pg
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    DernierArticleComponent,
    LienVersLesAutresArticlesComponent,
    ButtonRetourComponent,
    VoyageSummeryComponent,
    AvisComponent,
    PourVoyagerUnPeuPlusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
