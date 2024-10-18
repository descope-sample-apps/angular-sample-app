// ParameterHashLocationStrategy.ts

import { Injectable } from '@angular/core';
import { HashLocationStrategy } from '@angular/common';

@Injectable()
export class ParameterHashLocationStrategy extends HashLocationStrategy {
	override prepareExternalUrl(internal: string): string {
		console.log('preparing external url', window.location.search, super.prepareExternalUrl(internal));
		return window.location.search + super.prepareExternalUrl(internal);
	}
}