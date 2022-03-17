export enum Inputs {
    Key = "key",
    Path = "path",
    RestoreKeys = "restore-keys",
    UploadChunkSize = "upload-chunk-size",
    SaveCache = "save-cache"
}

export enum Outputs {
    CacheHit = "cache-hit",
    CacheRestored = "cache-restored"
}

export enum State {
    CachePrimaryKey = "CACHE_KEY",
    CacheMatchedKey = "CACHE_RESULT"
}

export enum Events {
    Key = "GITHUB_EVENT_NAME",
    Push = "push",
    PullRequest = "pull_request"
}

export const RefKey = "GITHUB_REF";
