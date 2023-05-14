import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment"

@Injectable()
export abstract class ClientService {

	private readonly baseUrl!: string

	constructor(private readonly _httpClient: HttpClient) {
		this.baseUrl = environment.baseUrl
	}

	private buildUrl(path: string): string {
		return this.baseUrl.concat(path)
	}

	get(path: string, options?: any): any {
		return this._httpClient.get(this.buildUrl(path), options)
	}
}
