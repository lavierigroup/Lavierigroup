import {site} from '../lib/site';import {paths} from '../lib/routes';
export default function sitemap(){return ['/',...paths].filter(p=>!p.includes('english-')&&p!=='/notifications').map(p=>({url:site.url+(p==='/'?'':p),changeFrequency:'monthly',priority:p==='/'?1:p.startsWith('/service-page/')?.9:.7}));}
