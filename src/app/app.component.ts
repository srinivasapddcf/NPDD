import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggerService } from './shared/services/logger.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {


    noInterNetPopUp = false;

    constructor(public updates: SwUpdate, private logger: LoggerService) {
        
        this.monitorInternetConnection();
        this.setupPeriodicUpdateCheck();
        this.subscribeToVersionUpdates();
        this.checkForUpdatesOnAppStart();
    }
    // let val = 0;
    // window.addEventListener('online', () => { 
    //   if (val === 1) {
    //     val = 0;
    //     this.noInterNetPopUp = false;
    //   }
    // });

    // window.addEventListener('offline', () => {
    //   val = 1;
    //   this.noInterNetPopUp = true;
    // });

    // if ('serviceWorker' in navigator && environment.production) {
    //   updates.available.subscribe((event) => {
    //     this.logger.log('update available : ', event);
    //     updates.activateUpdate().then(() => {
    //       document.location.reload();
    //     });
    //   });
    //   updates.checkForUpdate();
    // }

    // if (updates.isEnabled) {
    //   interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate()
    //     .then(() => console.log('checking for updates')));
    // }

    // this.checkForUpdates();

    // updates.activated.subscribe(event => {
    //   console.log('old version was', event.previous);
    //   console.log('new version is', event.current);
    // });



    //   checkForUpdates(): void {  
    //     this.updates.available.subscribe(event => {
    //       console.log('current version is', event.current);
    //       console.log('available version is', event.available);
    //       this.promptUser();
    //     });
    //   }

    //   promptUser(): void {
    //     console.log('updating to new version');
    //     this.updates.activateUpdate().then(() => this.updateApp());
    //   }

    //   updateApp(){
    //     document.location.reload();
    //     console.log("The app is updating right now");
    //    }

    private monitorInternetConnection(): void {
        let offlineFlag = 0;

        window.addEventListener('online', () => {
            if (offlineFlag === 1) {
                offlineFlag = 0;
                this.noInterNetPopUp = false;
            }
        });

        window.addEventListener('offline', () => {
            offlineFlag = 1;
            this.noInterNetPopUp = true;
        });
    }

    /**
     * Sets up periodic update checks every 6 hours.
     */
    private setupPeriodicUpdateCheck(): void {
        if (this.updates.isEnabled) {
            interval(6 * 60 * 60 * 1000).subscribe(() => {
                this.updates.checkForUpdate()
                    .then(() => console.log('Checking for updates...'))
                    .catch(err => console.error('Error during periodic update check:', err));
            });
        }
    }

    /**
     * Subscribes to version updates and handles `VERSION_READY` and `VERSION_INSTALLATION_FAILED` events.
     */
    private subscribeToVersionUpdates(): void {
        if (this.updates.isEnabled) {
            this.updates.versionUpdates.subscribe((event: VersionEvent) => {
                if (event.type === 'VERSION_READY') {
                    console.log('Old version hash:', event.currentVersion.hash);
                    console.log('New version hash:', event.latestVersion.hash);

                    if (event.latestVersion.appData) {
                        console.log('New version app data:', event.latestVersion.appData);
                    }

                    this.promptUser();
                } else if (event.type === 'VERSION_INSTALLATION_FAILED') {
                    console.error('Version installation failed:', event);
                }
            });
        }
    }

    /**
     * Checks for updates when the app starts.
     */
    private checkForUpdatesOnAppStart(): void {
        if (this.updates.isEnabled) {
            this.updates.checkForUpdate()
                .then(() => console.log('Initial update check completed.'))
                .catch(err => console.error('Error during initial update check:', err));
        }
    }

    /**
     * Prompts the user to reload the app if a new version is available.
     */
    private promptUser(): void {
        if (confirm('A new version is available. Would you like to update?')) {
            this.updateApp();
        }
    }

    /**
     * Reloads the application to load the new version.
     */
    private updateApp(): void {
        console.log('Reloading application to apply the new version...');
        window.location.reload();
    }
}
