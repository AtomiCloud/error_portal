const sources = require("./sources.json");
const write = require("write");
const { rimrafSync} = require('rimraf')



for(let l in sources) {
    const landscape = sources[l];
    rimrafSync(`./static/${l}/`);
    rimrafSync(`./docs/${l}/`);
    for (let p in landscape) {
        const platform = landscape[p];
        for (let s in platform) {
            const service = platform[s];
            for (let m in service) {
                const module = service[m];
                for (let v in module) {
                    const version = module[v];
                    load(version)
                    .then(x => {
                        
                        x.forEach(r => {
                            const id = r.name;
                            write.sync(`./static/${l}/${p}/${s}/${m}/${v}/${id}.json`, r.data);
                            write.sync(`./docs/${l}/${p}/${s}/${m}/${v}/${id}.mdx`, mdx(l,p,s,m,v,id));
                        })
                    });
                }
            }
        }
    }
}

async function load(version) {
    const r = await fetch(version);
    const j = await r.json();
    const all = j.map(async x => {
        const resp = await fetch(`${version}/${x}`);
        const t = await resp.text();
        return {
            name: x,
            data: t,
        }
    })
    return await Promise.all(all);
}


function mdx(l,p,s,m,v,id) {
    return `
import CodeBlock from '@theme/CodeBlock';
import Schema from "@site/static/${l}/${p}/${s}/${m}/${v}/${id}.json";
import JSONSchemaViewer from "@theme/JSONSchemaViewer";

<h1> { Schema.title } </h1>

<p> <b> Version </b> { Schema.version } </p>
<p> <b> Id </b> { Schema.id } </p>
<p> { Schema.schema.description } </p>

<JSONSchemaViewer schema={ Schema.schema } />

# Source

<CodeBlock language="json">{JSON.stringify(Schema.schema, null, 2)}</CodeBlock>`;

}