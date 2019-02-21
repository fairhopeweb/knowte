import { Component, OnInit } from '@angular/core';
import { remote, BrowserWindow } from 'electron';
import { Utils } from '../../core/utils';
import log from 'electron-log';

@Component({
    selector: 'window-controls',
    templateUrl: './windowControls.component.html',
    styleUrls: ['./windowControls.component.scss']
})
export class WindowControlsComponent implements OnInit {
    constructor() {

    }
 
    public canMaximize: boolean = false;

    ngOnInit() {
        let window: BrowserWindow = remote.getCurrentWindow();
        this.canMaximize = !window.isMaximized();
    }

    public minButtonClick(): void {
        let window: BrowserWindow = remote.getCurrentWindow();
        window.minimize();
    }

    public maxRestoreClick(): void {
        let window: BrowserWindow = remote.getCurrentWindow();

        if (window.isMaximized()) {
            window.unmaximize();
            this.canMaximize = true;
        } else {
            window.maximize();
            this.canMaximize = false;
        }
    }

    public closeButtonClick(): void {
        let window: BrowserWindow = remote.getCurrentWindow();
        window.close();
    }
}