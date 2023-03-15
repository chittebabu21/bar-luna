import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  // URL to web api
  private subscriptionUrl = 'http://localhost:3000/subscriptions';

  constructor(private http: HttpClient) { }

  // create a subscription
  createSubscription(subscription: any) {
    return this.http.post(this.subscriptionUrl, subscription);
  }

  // get all subscriptions
  getSubscriptions() {
    return this.http.get(this.subscriptionUrl);
  }

  // get a subscription by id
  getsubscribtion(id: string) {
    return this.http.get(`${this.subscriptionUrl}/${id}`);
  }

  // delete a subscription
  deleteSubscription(id: string) {
    return this.http.delete(`${this.subscriptionUrl}/${id}`);
  }
}
