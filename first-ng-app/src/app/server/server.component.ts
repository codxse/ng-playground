import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "offline";
  allowNewServer: boolean = true;
  text: string = "";
  username: string = "";
  username2: string = "";
  usernames: string[] = [];

  setDisabled(): void {
    this.allowNewServer = !this.allowNewServer;
    console.log("d", this.allowNewServer);
  }

  onChangeText(event: Event): void {
    this.text = (event.target as HTMLInputElement).value;
  }

  appendUsername(): void {
    this.usernames = [...this.usernames, this.username];
    this.username = "";
    console.log(this.usernames);
  }
}
