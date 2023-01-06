import {Injectable} from '@angular/core';
import {v4 as uuid4} from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  public generatedUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw Error('Prefix can not be empty');
    }
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuid4();
  }
}
