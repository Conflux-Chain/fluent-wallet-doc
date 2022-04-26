(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6529],{99919:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return f},default:function(){return j},frontMatter:function(){return h},metadata:function(){return m},toc:function(){return b}});var a=n(28427),l=n(84397),c=n(2784),i=n(30876),s=n(99609),r=n(71926),o=n(32126),d=n(22478),_=n(62355),x=n(78007),u=n(27821);function w(){var e=(0,c.useState)(null),t=e[0],n=e[1];(0,r.Z)((function(){var e;location&&location.hash&&n(null==(e=location.hash)||null==e.substr?void 0:e.substr(1))}),t?null:100);var a=c.createElement("section",null,c.createElement("h2",null,"No rpc method provided"));return t?c.createElement("section",null,c.createElement(g,{name:t})):a}function g(e){var t=e.name,n=(0,d.U)(t).schemas,a=(0,o.Z)(!1),l=a[0],i=a[1],s=(0,c.useState)(""),r=s[0],w=s[1],g=(0,_.U)(t,{schema:null==n?void 0:n.input}),p=g.gen,h=g.valid,f=g.error,m=g.data,b=g.setData,k=g.schema;if(p&&!l){try{b(p(k))}catch(j){}i(!0)}return c.createElement("div",null,c.createElement("button",{style:{marginRight:"1rem"},disabled:!h,onClick:function(){return(e={method:t,params:m},new Promise((function(t){var n;null==(n=conflux)||n.request(e).then((function(e){t({result:e})})).catch((function(e){return t({error:e})}))}))).then((function(e){e.error?w(e.error.message):w(JSON.stringify(e.result,null,4))}));var e}},"Try"),c.createElement("button",{onClick:function(){return b(p(k))}},"Random"),!h&&!f&&c.createElement("p",null,"Invalid Data"),!h&&f&&c.createElement("p",null,"Error in params: \n"+f),c.createElement("h4",null,"Params: "),c.createElement(x.Z,{placeholder:m,locale:u.Z,onChange:function(e){return b(e.jsObject)}}),c.createElement("h4",null,"Response:"),c.createElement("textarea",{style:{minWidth:"30rem",minHeight:"10rem"},readOnly:!0,value:r}))}g.propTypes={name:s.string.isRequired};var p=["components"],h={id:"try-rpc",title:"Try RPC",custom_edit_url:"https://github.com/Conflux-Chain/helios/tree/dev/packages/rpcs"},f=void 0,m={unversionedId:"try-rpc",id:"try-rpc",isDocsHomePage:!1,title:"Try RPC",description:"",source:"@site/docs/try-rpc.mdx",sourceDirName:".",slug:"/try-rpc",permalink:"/fluent-wallet-doc/docs/try-rpc",editUrl:"https://github.com/Conflux-Chain/helios/tree/dev/packages/rpcs",tags:[],version:"current",frontMatter:{id:"try-rpc",title:"Try RPC",custom_edit_url:"https://github.com/Conflux-Chain/helios/tree/dev/packages/rpcs"}},b=[],k={toc:b};function j(e){var t=e.components,n=(0,l.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.Fragment,null,(0,i.kt)(w,{mdxType:"UI"})))}j.isMDXComponent=!0},26190:function(e,t,n){var a={"./cfx_accounts":51343,"./cfx_accounts/":51343,"./cfx_accounts/index":51343,"./cfx_accounts/index.js":51343,"./cfx_call":41223,"./cfx_call/":41223,"./cfx_call/index":41223,"./cfx_call/index.js":41223,"./cfx_chain-id":76026,"./cfx_chain-id/":76026,"./cfx_chain-id/index":76026,"./cfx_chain-id/index.js":76026,"./cfx_check-balance-against-transaction":63689,"./cfx_check-balance-against-transaction/":63689,"./cfx_check-balance-against-transaction/index":63689,"./cfx_check-balance-against-transaction/index.js":63689,"./cfx_client-version":38820,"./cfx_client-version/":38820,"./cfx_client-version/index":38820,"./cfx_client-version/index.js":38820,"./cfx_epoch-number":50320,"./cfx_epoch-number/":50320,"./cfx_epoch-number/index":50320,"./cfx_epoch-number/index.js":50320,"./cfx_estimate-gas-and-collateral":87021,"./cfx_estimate-gas-and-collateral/":87021,"./cfx_estimate-gas-and-collateral/index":87021,"./cfx_estimate-gas-and-collateral/index.js":87021,"./cfx_gas-price":59068,"./cfx_gas-price/":59068,"./cfx_gas-price/index":59068,"./cfx_gas-price/index.js":59068,"./cfx_get-account":79121,"./cfx_get-account-pending-info":89173,"./cfx_get-account-pending-info/":89173,"./cfx_get-account-pending-info/index":89173,"./cfx_get-account-pending-info/index.js":89173,"./cfx_get-account-pending-transactions":54724,"./cfx_get-account-pending-transactions/":54724,"./cfx_get-account-pending-transactions/index":54724,"./cfx_get-account-pending-transactions/index.js":54724,"./cfx_get-account/":79121,"./cfx_get-account/index":79121,"./cfx_get-account/index.js":79121,"./cfx_get-accumulate-interest-rate":35904,"./cfx_get-accumulate-interest-rate/":35904,"./cfx_get-accumulate-interest-rate/index":35904,"./cfx_get-accumulate-interest-rate/index.js":35904,"./cfx_get-admin":43925,"./cfx_get-admin/":43925,"./cfx_get-admin/index":43925,"./cfx_get-admin/index.js":43925,"./cfx_get-balance":87067,"./cfx_get-balance/":87067,"./cfx_get-balance/index":87067,"./cfx_get-balance/index.js":87067,"./cfx_get-best-block-hash":87161,"./cfx_get-best-block-hash/":87161,"./cfx_get-best-block-hash/index":87161,"./cfx_get-best-block-hash/index.js":87161,"./cfx_get-block-by-block-number":91197,"./cfx_get-block-by-block-number/":91197,"./cfx_get-block-by-block-number/index":91197,"./cfx_get-block-by-block-number/index.js":91197,"./cfx_get-block-by-epoch-number":45222,"./cfx_get-block-by-epoch-number/":45222,"./cfx_get-block-by-epoch-number/index":45222,"./cfx_get-block-by-epoch-number/index.js":45222,"./cfx_get-block-by-hash":41212,"./cfx_get-block-by-hash-with-pivot-assumption":50038,"./cfx_get-block-by-hash-with-pivot-assumption/":50038,"./cfx_get-block-by-hash-with-pivot-assumption/index":50038,"./cfx_get-block-by-hash-with-pivot-assumption/index.js":50038,"./cfx_get-block-by-hash/":41212,"./cfx_get-block-by-hash/index":41212,"./cfx_get-block-by-hash/index.js":41212,"./cfx_get-block-reward-info":27172,"./cfx_get-block-reward-info/":27172,"./cfx_get-block-reward-info/index":27172,"./cfx_get-block-reward-info/index.js":27172,"./cfx_get-blocks-by-epoch":55805,"./cfx_get-blocks-by-epoch/":55805,"./cfx_get-blocks-by-epoch/index":55805,"./cfx_get-blocks-by-epoch/index.js":55805,"./cfx_get-code":98611,"./cfx_get-code/":98611,"./cfx_get-code/index":98611,"./cfx_get-code/index.js":98611,"./cfx_get-collateral-for-storage":82803,"./cfx_get-collateral-for-storage/":82803,"./cfx_get-collateral-for-storage/index":82803,"./cfx_get-collateral-for-storage/index.js":82803,"./cfx_get-confirmation-risk-by-hash":30364,"./cfx_get-confirmation-risk-by-hash/":30364,"./cfx_get-confirmation-risk-by-hash/index":30364,"./cfx_get-confirmation-risk-by-hash/index.js":30364,"./cfx_get-deposit-list":68613,"./cfx_get-deposit-list/":68613,"./cfx_get-deposit-list/index":68613,"./cfx_get-deposit-list/index.js":68613,"./cfx_get-interest-rate":15237,"./cfx_get-interest-rate/":15237,"./cfx_get-interest-rate/index":15237,"./cfx_get-interest-rate/index.js":15237,"./cfx_get-logs":70919,"./cfx_get-logs/":70919,"./cfx_get-logs/index":70919,"./cfx_get-logs/index.js":70919,"./cfx_get-max-gas-limit":31423,"./cfx_get-max-gas-limit/":31423,"./cfx_get-max-gas-limit/index":31423,"./cfx_get-max-gas-limit/index.js":31423,"./cfx_get-next-nonce":51249,"./cfx_get-next-nonce/":51249,"./cfx_get-next-nonce/index":51249,"./cfx_get-next-nonce/index.js":51249,"./cfx_get-next-usable-nonce":10826,"./cfx_get-next-usable-nonce/":10826,"./cfx_get-next-usable-nonce/index":10826,"./cfx_get-next-usable-nonce/index.js":10826,"./cfx_get-pos-economics":97253,"./cfx_get-pos-economics/":97253,"./cfx_get-pos-economics/index":97253,"./cfx_get-pos-economics/index.js":97253,"./cfx_get-pos-reward-by-epoch":52896,"./cfx_get-pos-reward-by-epoch/":52896,"./cfx_get-pos-reward-by-epoch/index":52896,"./cfx_get-pos-reward-by-epoch/index.js":52896,"./cfx_get-skipped-blocks-by-epoch":27942,"./cfx_get-skipped-blocks-by-epoch/":27942,"./cfx_get-skipped-blocks-by-epoch/index":27942,"./cfx_get-skipped-blocks-by-epoch/index.js":27942,"./cfx_get-sponsor-info":72746,"./cfx_get-sponsor-info/":72746,"./cfx_get-sponsor-info/index":72746,"./cfx_get-sponsor-info/index.js":72746,"./cfx_get-staking-balance":99162,"./cfx_get-staking-balance/":99162,"./cfx_get-staking-balance/index":99162,"./cfx_get-staking-balance/index.js":99162,"./cfx_get-status":57148,"./cfx_get-status/":57148,"./cfx_get-status/index":57148,"./cfx_get-status/index.js":57148,"./cfx_get-storage-at":36089,"./cfx_get-storage-at/":36089,"./cfx_get-storage-at/index":36089,"./cfx_get-storage-at/index.js":36089,"./cfx_get-storage-root":21244,"./cfx_get-storage-root/":21244,"./cfx_get-storage-root/index":21244,"./cfx_get-storage-root/index.js":21244,"./cfx_get-supply-info":84066,"./cfx_get-supply-info/":84066,"./cfx_get-supply-info/index":84066,"./cfx_get-supply-info/index.js":84066,"./cfx_get-transaction-by-hash":73530,"./cfx_get-transaction-by-hash/":73530,"./cfx_get-transaction-by-hash/index":73530,"./cfx_get-transaction-by-hash/index.js":73530,"./cfx_get-transaction-receipt":66911,"./cfx_get-transaction-receipt/":66911,"./cfx_get-transaction-receipt/index":66911,"./cfx_get-transaction-receipt/index.js":66911,"./cfx_get-vote-list":96101,"./cfx_get-vote-list/":96101,"./cfx_get-vote-list/index":96101,"./cfx_get-vote-list/index.js":96101,"./cfx_net-version":7260,"./cfx_net-version/":7260,"./cfx_net-version/index":7260,"./cfx_net-version/index.js":7260,"./cfx_opened-method-groups":46221,"./cfx_opened-method-groups/":46221,"./cfx_opened-method-groups/index":46221,"./cfx_opened-method-groups/index.js":46221,"./cfx_request-accounts":65834,"./cfx_request-accounts/":65834,"./cfx_request-accounts/index":65834,"./cfx_request-accounts/index.js":65834,"./cfx_send-raw-transaction":56309,"./cfx_send-raw-transaction/":56309,"./cfx_send-raw-transaction/index":56309,"./cfx_send-raw-transaction/index.js":56309,"./cfx_send-transaction":78762,"./cfx_send-transaction/":78762,"./cfx_send-transaction/index":78762,"./cfx_send-transaction/index.js":78762,"./cfx_sign-transaction":46681,"./cfx_sign-transaction/":46681,"./cfx_sign-transaction/index":46681,"./cfx_sign-transaction/index.js":46681,"./cfx_sign-tx-with-ledger-nano-s":59582,"./cfx_sign-tx-with-ledger-nano-s/":59582,"./cfx_sign-tx-with-ledger-nano-s/index":59582,"./cfx_sign-tx-with-ledger-nano-s/index.js":59582,"./cfx_sign-typed-data_v4":82423,"./cfx_sign-typed-data_v4/":82423,"./cfx_sign-typed-data_v4/index":82423,"./cfx_sign-typed-data_v4/index.js":82423,"./eth_accounts":29394,"./eth_accounts/":29394,"./eth_accounts/index":29394,"./eth_accounts/index.js":29394,"./eth_block-number":31715,"./eth_block-number/":31715,"./eth_block-number/index":31715,"./eth_block-number/index.js":31715,"./eth_call":39156,"./eth_call/":39156,"./eth_call/index":39156,"./eth_call/index.js":39156,"./eth_chain-id":7356,"./eth_chain-id/":7356,"./eth_chain-id/index":7356,"./eth_chain-id/index.js":7356,"./eth_estimate-gas":79108,"./eth_estimate-gas/":79108,"./eth_estimate-gas/index":79108,"./eth_estimate-gas/index.js":79108,"./eth_fee-history":90169,"./eth_fee-history/":90169,"./eth_fee-history/index":90169,"./eth_fee-history/index.js":90169,"./eth_gas-price":47650,"./eth_gas-price/":47650,"./eth_gas-price/index":47650,"./eth_gas-price/index.js":47650,"./eth_get-balance":50635,"./eth_get-balance/":50635,"./eth_get-balance/index":50635,"./eth_get-balance/index.js":50635,"./eth_get-block-by-hash":85249,"./eth_get-block-by-hash/":85249,"./eth_get-block-by-hash/index":85249,"./eth_get-block-by-hash/index.js":85249,"./eth_get-block-by-number":72665,"./eth_get-block-by-number/":72665,"./eth_get-block-by-number/index":72665,"./eth_get-block-by-number/index.js":72665,"./eth_get-code":20902,"./eth_get-code/":20902,"./eth_get-code/index":20902,"./eth_get-code/index.js":20902,"./eth_get-logs":16598,"./eth_get-logs/":16598,"./eth_get-logs/index":16598,"./eth_get-logs/index.js":16598,"./eth_get-transaction-by-hash":41291,"./eth_get-transaction-by-hash/":41291,"./eth_get-transaction-by-hash/index":41291,"./eth_get-transaction-by-hash/index.js":41291,"./eth_get-transaction-count":73435,"./eth_get-transaction-count/":73435,"./eth_get-transaction-count/index":73435,"./eth_get-transaction-count/index.js":73435,"./eth_get-transaction-receipt":20795,"./eth_get-transaction-receipt/":20795,"./eth_get-transaction-receipt/index":20795,"./eth_get-transaction-receipt/index.js":20795,"./eth_request-accounts":24125,"./eth_request-accounts/":24125,"./eth_request-accounts/index":24125,"./eth_request-accounts/index.js":24125,"./eth_send-raw-transaction":30684,"./eth_send-raw-transaction/":30684,"./eth_send-raw-transaction/index":30684,"./eth_send-raw-transaction/index.js":30684,"./eth_send-transaction":81316,"./eth_send-transaction/":81316,"./eth_send-transaction/index":81316,"./eth_send-transaction/index.js":81316,"./eth_sign-transaction":90909,"./eth_sign-transaction/":90909,"./eth_sign-transaction/index":90909,"./eth_sign-transaction/index.js":90909,"./eth_sign-tx-with-ledger-nano-s":83272,"./eth_sign-tx-with-ledger-nano-s/":83272,"./eth_sign-tx-with-ledger-nano-s/index":83272,"./eth_sign-tx-with-ledger-nano-s/index.js":83272,"./eth_sign-typed-data_v4":7272,"./eth_sign-typed-data_v4/":7272,"./eth_sign-typed-data_v4/index":7272,"./eth_sign-typed-data_v4/index.js":7272,"./net_version":24853,"./net_version/":24853,"./net_version/index":24853,"./net_version/index.js":24853,"./personal_sign":97194,"./personal_sign/":97194,"./personal_sign/index":97194,"./personal_sign/index.js":97194,"./txpool_next-nonce":47672,"./txpool_next-nonce/":47672,"./txpool_next-nonce/index":47672,"./txpool_next-nonce/index.js":47672,"./wallet_accounts":14914,"./wallet_accounts/":14914,"./wallet_accounts/index":14914,"./wallet_accounts/index.js":14914,"./wallet_add-conflux-chain":24397,"./wallet_add-conflux-chain/":24397,"./wallet_add-conflux-chain/index":24397,"./wallet_add-conflux-chain/index.js":24397,"./wallet_add-ethereum-chain":16882,"./wallet_add-ethereum-chain/":16882,"./wallet_add-ethereum-chain/index":16882,"./wallet_add-ethereum-chain/index.js":16882,"./wallet_add-hd-path":77714,"./wallet_add-hd-path/":77714,"./wallet_add-hd-path/index":77714,"./wallet_add-hd-path/index.js":77714,"./wallet_add-network":18350,"./wallet_add-network/":18350,"./wallet_add-network/index":18350,"./wallet_add-network/index.js":18350,"./wallet_add-pending-user-auth-request":30170,"./wallet_add-pending-user-auth-request/":30170,"./wallet_add-pending-user-auth-request/index":30170,"./wallet_add-pending-user-auth-request/index.js":30170,"./wallet_add-vault":3396,"./wallet_add-vault/":3396,"./wallet_add-vault/index":3396,"./wallet_add-vault/index.js":3396,"./wallet_after-unlock":93356,"./wallet_after-unlock/":93356,"./wallet_after-unlock/index":93356,"./wallet_after-unlock/index.js":93356,"./wallet_chain-id":11780,"./wallet_chain-id/":11780,"./wallet_chain-id/index":11780,"./wallet_chain-id/index.js":11780,"./wallet_cleanup-tx":32035,"./wallet_cleanup-tx/":32035,"./wallet_cleanup-tx/index":32035,"./wallet_cleanup-tx/index.js":32035,"./wallet_create-account":7470,"./wallet_create-account/":7470,"./wallet_create-account/index":7470,"./wallet_create-account/index.js":7470,"./wallet_create-address":95318,"./wallet_create-address/":95318,"./wallet_create-address/index":95318,"./wallet_create-address/index.js":95318,"./wallet_db-query":66979,"./wallet_db-query/":66979,"./wallet_db-query/index":66979,"./wallet_db-query/index.js":66979,"./wallet_delete-account-group":87555,"./wallet_delete-account-group/":87555,"./wallet_delete-account-group/index":87555,"./wallet_delete-account-group/index.js":87555,"./wallet_delete-app":6630,"./wallet_delete-app/":6630,"./wallet_delete-app/index":6630,"./wallet_delete-app/index.js":6630,"./wallet_delete-network":53871,"./wallet_delete-network/":53871,"./wallet_delete-network/index":53871,"./wallet_delete-network/index.js":53871,"./wallet_detect-address-type":26155,"./wallet_detect-address-type/":26155,"./wallet_detect-address-type/index":26155,"./wallet_detect-address-type/index.js":26155,"./wallet_detect-network-type":50027,"./wallet_detect-network-type/":50027,"./wallet_detect-network-type/index":50027,"./wallet_detect-network-type/index.js":50027,"./wallet_discover-accounts":45164,"./wallet_discover-accounts/":45164,"./wallet_discover-accounts/index":45164,"./wallet_discover-accounts/index.js":45164,"./wallet_enrich-conflux-tx":14445,"./wallet_enrich-conflux-tx/":14445,"./wallet_enrich-conflux-tx/index":14445,"./wallet_enrich-conflux-tx/index.js":14445,"./wallet_enrich-ethereum-tx":79461,"./wallet_enrich-ethereum-tx/":79461,"./wallet_enrich-ethereum-tx/index":79461,"./wallet_enrich-ethereum-tx/index.js":79461,"./wallet_enrich-txs":32169,"./wallet_enrich-txs/":32169,"./wallet_enrich-txs/index":32169,"./wallet_enrich-txs/index.js":32169,"./wallet_export-account":23490,"./wallet_export-account-group":13334,"./wallet_export-account-group/":13334,"./wallet_export-account-group/index":13334,"./wallet_export-account-group/index.js":13334,"./wallet_export-account/":23490,"./wallet_export-account/index":23490,"./wallet_export-account/index.js":23490,"./wallet_export-all":39760,"./wallet_export-all/":39760,"./wallet_export-all/index":39760,"./wallet_export-all/index.js":39760,"./wallet_generate-address":33206,"./wallet_generate-address/":33206,"./wallet_generate-address/index":33206,"./wallet_generate-address/index.js":33206,"./wallet_generate-mnemonic":47158,"./wallet_generate-mnemonic/":47158,"./wallet_generate-mnemonic/index":47158,"./wallet_generate-mnemonic/index.js":47158,"./wallet_generate-private-key":9013,"./wallet_generate-private-key/":9013,"./wallet_generate-private-key/index":9013,"./wallet_generate-private-key/index.js":9013,"./wallet_get-account-address-by-network":66700,"./wallet_get-account-address-by-network/":66700,"./wallet_get-account-address-by-network/index":66700,"./wallet_get-account-address-by-network/index.js":66700,"./wallet_get-account-group":69131,"./wallet_get-account-group-vault-value":700,"./wallet_get-account-group-vault-value/":700,"./wallet_get-account-group-vault-value/index":700,"./wallet_get-account-group-vault-value/index.js":700,"./wallet_get-account-group/":69131,"./wallet_get-account-group/index":69131,"./wallet_get-account-group/index.js":69131,"./wallet_get-address-private-key":60805,"./wallet_get-address-private-key/":60805,"./wallet_get-address-private-key/index":60805,"./wallet_get-address-private-key/index.js":60805,"./wallet_get-balance":15589,"./wallet_get-balance/":15589,"./wallet_get-balance/index":15589,"./wallet_get-balance/index.js":15589,"./wallet_get-blockchain-explorer-url":32573,"./wallet_get-blockchain-explorer-url/":32573,"./wallet_get-blockchain-explorer-url/index":32573,"./wallet_get-blockchain-explorer-url/index.js":32573,"./wallet_get-current-account":65416,"./wallet_get-current-account/":65416,"./wallet_get-current-account/index":65416,"./wallet_get-current-account/index.js":65416,"./wallet_get-current-network":47413,"./wallet_get-current-network/":47413,"./wallet_get-current-network/index":47413,"./wallet_get-current-network/index.js":47413,"./wallet_get-current-viewing-app":25766,"./wallet_get-current-viewing-app/":25766,"./wallet_get-current-viewing-app/index":25766,"./wallet_get-current-viewing-app/index.js":25766,"./wallet_get-fluent-metadata":56543,"./wallet_get-fluent-metadata/":56543,"./wallet_get-fluent-metadata/index":56543,"./wallet_get-fluent-metadata/index.js":56543,"./wallet_get-import-hardware-wallet-info":19482,"./wallet_get-import-hardware-wallet-info/":19482,"./wallet_get-import-hardware-wallet-info/index":19482,"./wallet_get-import-hardware-wallet-info/index.js":19482,"./wallet_get-network":10375,"./wallet_get-network/":10375,"./wallet_get-network/index":10375,"./wallet_get-network/index.js":10375,"./wallet_get-next-nonce":76565,"./wallet_get-next-nonce/":76565,"./wallet_get-next-nonce/index":76565,"./wallet_get-next-nonce/index.js":76565,"./wallet_get-next-usable-nonce":71145,"./wallet_get-next-usable-nonce/":71145,"./wallet_get-next-usable-nonce/index":71145,"./wallet_get-next-usable-nonce/index.js":71145,"./wallet_get-pending-auth-request":31216,"./wallet_get-pending-auth-request/":31216,"./wallet_get-pending-auth-request/index":31216,"./wallet_get-pending-auth-request/index.js":31216,"./wallet_get-permissions":45253,"./wallet_get-permissions/":45253,"./wallet_get-permissions/index":45253,"./wallet_get-permissions/index.js":45253,"./wallet_get-preferences":2168,"./wallet_get-preferences/":2168,"./wallet_get-preferences/index":2168,"./wallet_get-preferences/index.js":2168,"./wallet_handle-unfinished-cfx-tx":1135,"./wallet_handle-unfinished-cfx-tx/":1135,"./wallet_handle-unfinished-cfx-tx/index":1135,"./wallet_handle-unfinished-cfx-tx/index.js":1135,"./wallet_handle-unfinished-eth-tx":50284,"./wallet_handle-unfinished-eth-tx/":50284,"./wallet_handle-unfinished-eth-tx/index":50284,"./wallet_handle-unfinished-eth-tx/index.js":50284,"./wallet_handle-unfinished-txs":22176,"./wallet_handle-unfinished-txs/":22176,"./wallet_handle-unfinished-txs/index":22176,"./wallet_handle-unfinished-txs/index.js":22176,"./wallet_import-address":4165,"./wallet_import-address/":4165,"./wallet_import-address/index":4165,"./wallet_import-address/index.js":4165,"./wallet_import-all":29783,"./wallet_import-all/":29783,"./wallet_import-all/index":29783,"./wallet_import-all/index.js":29783,"./wallet_import-hardware-wallet-account-group-or-account":38886,"./wallet_import-hardware-wallet-account-group-or-account/":38886,"./wallet_import-hardware-wallet-account-group-or-account/index":38886,"./wallet_import-hardware-wallet-account-group-or-account/index.js":38886,"./wallet_import-mnemonic":89749,"./wallet_import-mnemonic/":89749,"./wallet_import-mnemonic/index":89749,"./wallet_import-mnemonic/index.js":89749,"./wallet_import-private-key":91145,"./wallet_import-private-key/":91145,"./wallet_import-private-key/index":91145,"./wallet_import-private-key/index.js":91145,"./wallet_is-locked":68219,"./wallet_is-locked/":68219,"./wallet_is-locked/index":68219,"./wallet_is-locked/index.js":68219,"./wallet_lock":24038,"./wallet_lock/":24038,"./wallet_lock/index":24038,"./wallet_lock/index.js":24038,"./wallet_metadata-for-popup":39067,"./wallet_metadata-for-popup/":39067,"./wallet_metadata-for-popup/index":39067,"./wallet_metadata-for-popup/index.js":39067,"./wallet_network1559compatible":35723,"./wallet_network1559compatible/":35723,"./wallet_network1559compatible/index":35723,"./wallet_network1559compatible/index.js":35723,"./wallet_refetch-balance":97546,"./wallet_refetch-balance/":97546,"./wallet_refetch-balance/index":97546,"./wallet_refetch-balance/index.js":97546,"./wallet_refetch-token-list":32754,"./wallet_refetch-token-list/":32754,"./wallet_refetch-token-list/index":32754,"./wallet_refetch-token-list/index.js":32754,"./wallet_register-site-metadata":78008,"./wallet_register-site-metadata/":78008,"./wallet_register-site-metadata/index":78008,"./wallet_register-site-metadata/index.js":78008,"./wallet_request-accounts":52894,"./wallet_request-accounts/":52894,"./wallet_request-accounts/index":52894,"./wallet_request-accounts/index.js":52894,"./wallet_request-permissions":97721,"./wallet_request-permissions/":97721,"./wallet_request-permissions/index":97721,"./wallet_request-permissions/index.js":97721,"./wallet_request-unlock-ui":2031,"./wallet_request-unlock-ui/":2031,"./wallet_request-unlock-ui/index":2031,"./wallet_request-unlock-ui/index.js":2031,"./wallet_send-transaction":64601,"./wallet_send-transaction/":64601,"./wallet_send-transaction/index":64601,"./wallet_send-transaction/index.js":64601,"./wallet_set-app-current-account":56831,"./wallet_set-app-current-account/":56831,"./wallet_set-app-current-account/index":56831,"./wallet_set-app-current-account/index.js":56831,"./wallet_set-app-current-network":76809,"./wallet_set-app-current-network/":76809,"./wallet_set-app-current-network/index":76809,"./wallet_set-app-current-network/index.js":76809,"./wallet_set-current-account":87222,"./wallet_set-current-account/":87222,"./wallet_set-current-account/index":87222,"./wallet_set-current-account/index.js":87222,"./wallet_set-current-network":92074,"./wallet_set-current-network/":92074,"./wallet_set-current-network/index":92074,"./wallet_set-current-network/index.js":92074,"./wallet_set-preferences":97044,"./wallet_set-preferences/":97044,"./wallet_set-preferences/index":97044,"./wallet_set-preferences/index.js":97044,"./wallet_switch-conflux-chain":89363,"./wallet_switch-conflux-chain/":89363,"./wallet_switch-conflux-chain/index":89363,"./wallet_switch-conflux-chain/index.js":89363,"./wallet_switch-ethereum-chain":95655,"./wallet_switch-ethereum-chain/":95655,"./wallet_switch-ethereum-chain/index":95655,"./wallet_switch-ethereum-chain/index.js":95655,"./wallet_unlock":72996,"./wallet_unlock/":72996,"./wallet_unlock/index":72996,"./wallet_unlock/index.js":72996,"./wallet_unwatch-asset":65197,"./wallet_unwatch-asset/":65197,"./wallet_unwatch-asset/index":65197,"./wallet_unwatch-asset/index.js":65197,"./wallet_update-account":68204,"./wallet_update-account-group":74472,"./wallet_update-account-group/":74472,"./wallet_update-account-group/index":74472,"./wallet_update-account-group/index.js":74472,"./wallet_update-account/":68204,"./wallet_update-account/index":68204,"./wallet_update-account/index.js":68204,"./wallet_update-network":76163,"./wallet_update-network/":76163,"./wallet_update-network/index":76163,"./wallet_update-network/index.js":76163,"./wallet_update-token-list":85072,"./wallet_update-token-list/":85072,"./wallet_update-token-list/index":85072,"./wallet_update-token-list/index.js":85072,"./wallet_user-approved-auth-request":87112,"./wallet_user-approved-auth-request/":87112,"./wallet_user-approved-auth-request/index":87112,"./wallet_user-approved-auth-request/index.js":87112,"./wallet_user-rejected-auth-request":99866,"./wallet_user-rejected-auth-request/":99866,"./wallet_user-rejected-auth-request/index":99866,"./wallet_user-rejected-auth-request/index.js":99866,"./wallet_validate-app-permissions":29438,"./wallet_validate-app-permissions/":29438,"./wallet_validate-app-permissions/index":29438,"./wallet_validate-app-permissions/index.js":29438,"./wallet_validate-mnemonic":68153,"./wallet_validate-mnemonic/":68153,"./wallet_validate-mnemonic/index":68153,"./wallet_validate-mnemonic/index.js":68153,"./wallet_validate-password":60085,"./wallet_validate-password/":60085,"./wallet_validate-password/index":60085,"./wallet_validate-password/index.js":60085,"./wallet_validate-private-key":64725,"./wallet_validate-private-key/":64725,"./wallet_validate-private-key/index":64725,"./wallet_validate-private-key/index.js":64725,"./wallet_validate20token":7796,"./wallet_validate20token/":7796,"./wallet_validate20token/index":7796,"./wallet_validate20token/index.js":7796,"./wallet_watch-asset":90874,"./wallet_watch-asset/":90874,"./wallet_watch-asset/index":90874,"./wallet_watch-asset/index.js":90874,"./wallet_zero-account-group":76022,"./wallet_zero-account-group/":76022,"./wallet_zero-account-group/index":76022,"./wallet_zero-account-group/index.js":76022};function l(e){return c(e).then(n)}function c(e){return Promise.all([n.e(6345),n.e(2506)]).then((function(){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}))}l.keys=function(){return Object.keys(a)},l.resolve=c,l.id=26190,e.exports=l},22478:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});var a=n(2784),l=n(92467),c=n(90029);const i={},s={},r=e=>{if(!e)throw new Error(`invalid rpcName: ${e}`);const t=!s[e];t&&(s[e]=(e=>(0,l.Z)(((t,a)=>({_retryCount:0,cantLoadRPC:null,loadingRPC:!0,rpcName:e,setRPC:()=>{const{rpcName:e}=a();if(!e)return;if(i[e])return t({...i[e],loadingRPC:!1});const l=e.split("_"),[s,...r]=l;let o=r.reduce(((e,t)=>e+"_"+(0,c.o)(t)),s);o=o.replace("-po-s-","-pos-"),o=o.replace("validate20-token","validate20token"),window&&n(26190)("./"+o).then((e=>t({...e,loadingRPC:!1}))).catch((e=>{if(/\[Package Error\]/.test(e?.message)&&/skypack\.dev/.test(e?.fileName))return void console.error(e);const{_retryCount:n,setRPC:l}=a();if(n<5)return t((({_retryCount:e})=>({_retryCount:e+1}))),void l();console.error(e),t({cantLoadRPC:e})}))}}))))(e));const r=s[e]();return(0,a.useEffect)((()=>{t&&r.setRPC()}),[t,r]),r}},62355:function(e,t,n){"use strict";n.d(t,{U:function(){return r}});var a=n(2784),l=n(92467);let c=null,i=null;const s={},r=(e,{schema:t,data:r}={})=>{if(!e)throw new Error(`invalid spec id: ${e}`);const o=!s[e];o&&(s[e]=(e=>(0,l.Z)(((t,a)=>({_id:e,_specRetryCount:0,_genRetryCount:0,cantLoadSpec:null,cantLoadGen:null,loadingSpec:!0,loadingGen:!0,schema:null,doc:null,parsedData:null,data:null,spec:c,gen:i,error:null,valid:null,validating:!1,setData:e=>{let n;try{n=JSON.parse(e)}catch(l){}t(void 0!==n?{parsedData:n}:{parsedData:e}),t({data:e}),a().validate()},isLoading:()=>a().loadingSpec,validate:async()=>{const e=a();if(e.loadingSpec||!e.schema||null===e.data||"undefined"===e.data||""===e.data)return null;t({validating:!0});let n=await e.spec.validate(e.schema,e.parsedData);return t({valid:n,validating:!1}),e.setError(),n},setDoc:()=>{const e=a();if(!e.spec?.generateDocumentation||!e.schema)return;let n;try{n=e.spec.generateDocumentation(e.schema)}catch(l){throw console.log(`error gen doc for method ${e._id}`),l}return t({doc:n}),n},setError:async()=>{const e=a();if(e.validating||null===e.valid||e.valid)return null;let n=await e.spec.explain(e.schema,e.parsedData);return Array.isArray(n)||(n=[n]),t({error:n}),n},setSchema:e=>(t({schema:e}),a().validate(),a().setDoc()),setSpec:()=>{const{spec:e,setDoc:l,validate:i}=a();if(e)return i(),void l();window&&n.e(2198).then(n.bind(n,12198)).then((e=>{c=e,t({spec:e,loadingSpec:!1})})).then((()=>a().validate())).then((()=>a().setDoc())).catch((e=>{const{_specRetryCount:n,setSpec:l}=a();if(n<5)return t((({_specRetryCount:e})=>({_specRetryCount:e+1}))),void l();console.error(e),t({cantLoadSpec:e})}))},setGen:()=>{const{gen:e}=a();e||window&&n.e(8805).then(n.bind(n,18805)).then((({gen:e})=>{i=(...t)=>{const n=e(...t);return null==n?[]:n},t({gen:i,loadingGen:!1})})).catch((e=>{const{_genRetryCount:n,setGen:l}=a();if(n<5)return t((({_genRetryCount:e})=>({_genRetryCount:e+1}))),void l();console.error(e),t({cantLoadGen:e})}))}}))))(e));const d=(0,s[e])();return(0,a.useEffect)((()=>{t&&d.setSchema(t)}),[Boolean(t),e]),(0,a.useEffect)((()=>{r&&d.setData(r)}),[Boolean(r),e]),(0,a.useEffect)((()=>{o&&(d.setSpec(),d.setGen())}),[o,e]),d}}}]);