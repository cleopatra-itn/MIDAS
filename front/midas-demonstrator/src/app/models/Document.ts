export class Document {
    // TBD
    constructor(
        ner: boolean,
        sentiment: boolean,
        event: boolean,
        text: string,
    ) { }
}

export class DocumentResult {
    predictedNerText:[];
    predictedSentimentText:[];
    predictedEventText:[];
    text: string;
    finish: boolean;
}
export enum PredictionTask {
    Ner = 1,
    Sentiment,
    Event
}