class info
{
    ip = 'https://multiprinter.onrender.com/api/';

    nodes = this.ip + 'nodes';
    documents = this.ip + 'documents';
    queue = this.ip + 'queue';
    thumbnails = this.ip + 'thumbnail';
    
    //release = this.ip + 'release';
}

export const globalServer = new info();
