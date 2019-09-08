import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ImportFromOldVersionDialogComponent } from '../dialogs/importFromOldVersionDialog/importFromOldVersionDialog.component';
import { Constants } from '../../core/constants';
import { AppearanceService } from '../../services/appearance/appearance.service';
import { Settings } from '../../core/settings';
import { TranslatorService } from '../../services/translator/translator.service';
import { ColorTheme } from '../../core/colorTheme';

@Component({
  selector: 'settings-page',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {
  constructor(private dialog: MatDialog, private translator: TranslatorService, private appearance: AppearanceService,
    private settings: Settings) {
  }

  public colorThemes: ColorTheme[] = Constants.colorThemes;
  public fontSizes: number[] = [14, 16, 18, 20, 22, 24];
  public selectedTheme: string;

  public get closeNotesWithEscapeChecked(): boolean {
    return this.settings.closeNotesWithEscape;
  }
  public set closeNotesWithEscapeChecked(v: boolean) {
    this.settings.closeNotesWithEscape = v;
  }

  public get selectedFontSize(): number {
    return this.settings.fontSizeInNotes;
  }
  public set selectedFontSize(v: number) {
    this.settings.fontSizeInNotes = v;
  }

  public get showExactDatesInTheNotesListChecked(): boolean {
    return this.settings.showExactDatesInTheNotesList;
  }
  public set showExactDatesInTheNotesListChecked(v: boolean) {
    this.settings.showExactDatesInTheNotesList = v;
  }

  public ngOnInit(): void {
    this.selectedTheme = this.settings.colorTheme;
  }

  public import(): void {
    let dialogRef: MatDialogRef<ImportFromOldVersionDialogComponent> = this.dialog.open(ImportFromOldVersionDialogComponent, {
      width: '450px'
    });
  }

  public setTheme(themeName: string): void {
    this.selectedTheme = themeName;
    this.appearance.setTheme(themeName);
  }
}
