import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Color } from '../models/local.share.model';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private colorTranslations: Map<Color, string> = new Map();

  constructor(private translate: TranslateService) {
    this.initializeColorTranslations();
  }

  private initializeColorTranslations(): void {
    this.colorTranslations.set(Color.RED, this.translate.instant('colors.RED'));
    this.colorTranslations.set(Color.BLUE, this.translate.instant('colors.BLUE'));
    this.colorTranslations.set(Color.GREEN, this.translate.instant('colors.GREEN'));
  }

  public getColorTranslation(color: Color): string {
    return this.colorTranslations.get(color);
  }
}
