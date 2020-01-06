import { Observable } from 'rxjs';
import { Stat } from '../lib/objects/stat';

export abstract class StatisticsData {
  abstract getStatistics(statType: String): Observable<Stat[]>;
  abstract getStatisticsWithLimit(statType: String, limit: number): Observable<Stat[]>;
}


