!function(e){function t(t){for(var n,r,s=t[0],l=t[1],d=t[2],p=0,g=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(c&&c(t);g.length;)g.shift()();return a.push.apply(a,d||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},o={7:0},a=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/verso/static/";var s=window.webpackJsonpVerso=window.webpackJsonpVerso||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;a.push([2555,0,1]),i()}({105:function(e,t,i){e.exports=i(108)},108:function(e,t,i){const{asVariation:n}=i(13),o=i(109);o.ContentCenterNoBackground=n(o,"ContentCenterNoBackground",{contentAlign:"center",hasBackground:!1}),o.ContentRightNoBackground=n(o,"ContentRightNoBackground",{contentAlign:"right",hasBackground:!1}),o.ContentLeftNoBackground=n(o,"ContentLeftNoBackground",{contentAlign:"left",hasBackground:!1}),e.exports=o},109:function(e,t,i){const n=i(1),o=i(8),a=i(0),r=i(11),{trackComponent:s}=i(5),{UtilityLedeHeader:l,UtilityLedeWrapper:d,UtilityLedeHedText:c,UtilityLedeDekText:p,UtilityLedeImage:g}=i(95),u=({ariaLive:e,className:t,dangerousDek:i,dangerousHed:n,image:r,shouldUseAlternativeStyle:u,hasInverted:m,variations:h})=>{a.useEffect(()=>{s("UtilityLede",h)},[]);const y=r&&Object.keys(r).length>0;return a.createElement(l,{className:o("utility-lede",t),"aria-live":e,"aria-label":"UtilityPageHeader",contentAlign:h.contentAlign,hasBackground:h.hasBackground,hasImage:y,alternativeStyle:u},r&&a.createElement(g,Object.assign({hasImage:y},r)),a.createElement(d,{alternativeStyle:u},a.createElement(c,{"data-testid":"UtilityLedeHedText",hasImage:y,dangerouslySetInnerHTML:{__html:n},hasInverted:m}),i&&a.createElement(p,{"data-testid":"UtilityLedeDekText",hasImage:y,dangerouslySetInnerHTML:{__html:i}})))};u.propTypes={ariaLive:n.string,className:n.string,dangerousDek:n.string,dangerousHed:n.string.isRequired,hasInverted:n.bool,image:n.shape(r.propTypes),shouldUseAlternativeStyle:n.bool,variations:n.shape({contentAlign:n.oneOf(["center","left","right"]),hasBackground:n.bool})},u.defaultProps={shouldUseAlternativeStyle:!1,variations:{contentAlign:"center",hasBackground:!0}},e.exports=u},124:function(e,t,i){const n=i(3).default,{BaseText:o}=i(10),{calculateSpacing:a,getColorStyles:r}=i(4),s=n.div.withConfig({displayName:"ToggleChipListWrapper"})`
  ${({hasToggleGridColor:e,theme:t})=>e&&`\n  ${r(t,"background-color","colors.background.light")};\n  border-bottom:${a(4)} solid ;\n  ${r(t,"border-color","colors.background.light")};\n  `}
  display: flex;
  flex-direction: column;
  ${({contentAlign:e})=>"left"===e?"align-items: flex-start":"center"===e?"align-items: center":"right"===e&&"align-items: flex-end"}
`,l=n(o).withConfig({displayName:"LabelText"})`
  margin: 0 0 ${a(1)};

  ${({hasIncreasedBottomMargin:e})=>e&&` \n    margin: 0 0 ${a(2)};\n  `}

  ${({hasLargeLabel:e})=>e&&" \n    font-size: 1rem;\n    letter-spacing: 1px;\n  "}

  ${({fullPageTheme:e,theme:t})=>"inverted"===e?r(t,"color","colors.interactive.base.white"):""}
`;l.defaultProps={as:"div",colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.label"};const d=n.div.withConfig({displayName:"ListWrapper"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${a(1.5)};

  ${({hasNoHorizontalScroll:e})=>e&&" &::-webkit-scrollbar \n    {\n      display: none;\n    }"}

  ${({layout:e})=>"wrap"===e?"flex-wrap: wrap;":"overflow-x: auto;"}
  
  ${({contentAlign:e,layout:t})=>{if("nowrap"===t)return"";switch(e){case"left":return"justify-content: flex-start;";case"center":return"justify-content: center;";case"right":return"justify-content: flex-end;";default:return""}}}
  
  ${({hasToggleGridColor:e})=>e&&`--grid-margin: ${a(3)};`}
`,c=n.div.withConfig({displayName:"ListItemWrapper"})`
  ${({contentAlign:e,layout:t})=>{if("wrap"===t)return"";switch(e){case"center":return"\n        &:first-child {\n          margin-left: auto;\n        }\n\n        &:last-child {\n          margin-right: auto;\n        }\n      ";case"right":return"\n        &:first-child {\n          margin-left: auto;\n        }\n      ";default:return""}}}
`,p=n(o).withConfig({displayName:"HelperText"})`
  margin: ${a(1)} 0 0;
`;p.defaultProps={as:"div",colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.utility.assistive-text"},e.exports={ToggleChipListWrapper:s,LabelText:l,ListWrapper:d,ListItemWrapper:c,HelperText:p}},127:function(e,t,i){const n=i(3).default,{BaseLink:o,BaseText:a}=i(10),{calculateSpacing:r,getLinkStyles:s,getTypographyStyles:l,getColorStyles:d,getInputFieldStyles:c}=i(4),p=i(28),g=n.div.withConfig({displayName:"GroupedNavigationWrapper"})`
  padding-top: ${r(4)};
  height: 100%;

  ${({hasFilter:e})=>e&&`padding-top: ${r(2)};`}

  .navigation__heading {
    ${({theme:e})=>l(e,"typography.definitions.foundation.title-primary")};
    margin: 0;
    line-height: normal;
    ${({theme:e})=>d(e,"color","colors.foundation.expanded-utility.nav-link.default")};
  }

  .navigation__list-item {
    white-space: normal;
  }

  .content-divider {
    display: block;
    margin-bottom: ${r(2)};
    border-bottom-width: ${r(.5)};
    border-bottom-style: solid;
    ${({theme:e})=>d(e,"border-bottom-color","colors.discovery.lead.secondary.accent")};
    padding-top: ${r(1)};
    width: ${r(2)};
  }

  .grouped-navigation__link {
    ${({theme:e})=>s(e,"colors.foundation.expanded-utility.nav-link.default","colors.foundation.expanded-utility.nav-link.hover","navigation")}

    &.link--primary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,u=n.div.withConfig({displayName:"GroupedNavigationFilter"})`
  position: static;
  border-width: 0 0 1px;
  border-style: solid;
  ${({theme:e})=>d(e,"color","colors.discovery.body.white.divider")};
  width: calc(100% - 1.25rem);
  height: 60px;

  .icon {
    position: absolute;
    top: 10px;
    right: 0;
    pointer-events: none;
  }
`,m=n.div.withConfig({displayName:"GroupedNavigationFilterContent"})`
  position: relative;
`,h=n(a).withConfig({displayName:"GroupedNavigationFilterInput"})`
  ${({theme:e})=>c(e,"normal","background")};
  ${({theme:e})=>c(e,"normal","text")};
  border: none;
  width: 100%;
  height: ${r(6.2)};
`;h.defaultProps={as:"input",typeIdentity:"typography.definitions.foundation.link-secondary"};const y=n.div.withConfig({displayName:"GroupedNavigationContent"})`
  display: flex;
  height: 100%
    ${({hasFilter:e})=>e&&`\n      padding-top: ${r(4)};\n      height: calc(100% - 60px);\n  `};
`,b=n.div.withConfig({displayName:"GroupedNavigationLinks"})`
  flex: 1;
  height: 100%;
  overflow-y: auto;

  && li {
    padding-bottom: ${r(2)};

    &.link--primary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,f=n(p.Vertical).withConfig({displayName:"GroupedNavigationGroup"})`
  padding-bottom: ${r(5)};
`,C=n.div.withConfig({displayName:"GroupedNavigationIndex"})`
  position: static;
  padding-right: ${r(1)};
  overflow-y: auto;
`,v=n(a).withConfig({displayName:"AtoZIndexWrapper"})`
  width: ${r(3)};
  text-align: center;
`;v.defaultProps={as:"nav"};const S=n(a).withConfig({displayName:"AtoZIndexList"})`
  margin-top: 0;
  padding: 0;
  list-style: none;
`;S.defaultProps={as:"ul"};const w=n(o).withConfig({displayName:"AtoZIndexLink"})`
  display: block;
  background: none;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
  width: 100%;
`;w.defaultProps={colorSecondaryLinkToken:"colors.foundation.expanded-utility.nav-link.hover",colorStaticLinkToken:"colors.foundation.expanded-utility.nav-link.default",colorToken:"colors.foundation.expanded-utility.nav-link.default",linkStyle:"navigation",typeToken:"typography.definitions.foundation.link-secondary"};const k=n(a).withConfig({displayName:"AtoZIndexText"})`
  margin: 0;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
`;k.defaultProps={as:"li",colorToken:"colors.foundation.expanded-utility.nav-link.default",typeIdentity:"typography.definitions.foundation.link-secondary"},e.exports={GroupedNavigationWrapper:g,GroupedNavigationFilter:u,GroupedNavigationFilterContent:m,GroupedNavigationFilterInput:h,GroupedNavigationContent:y,GroupedNavigationLinks:b,GroupedNavigationGroup:f,GroupedNavigationIndex:C,AtoZIndexWrapper:v,AtoZIndexList:S,AtoZIndexLink:w,AtoZIndexText:k}},133:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({showAllPhotos:{id:"ContentHeader.ShowAllPhotos",defaultMessage:"Show all Photos",description:"Call to action to view entire photo gallery"},readReviews:{id:"ContentHeader.ReadReviews",defaultMessage:"Read Reviews",description:"Call to action to read reviews"}})},1349:function(e,t,i){const{asVariation:n}=i(13),o=i(1350),a=i(1366),r=i(1369);o.TextAboveCenterGridWidth=n(o,"TextAboveCenterGridWidth",{contentAlign:"center",contentPosition:"above"}),o.TextAboveCenterGridWidthTopCardSmall=n(o,"TextAboveCenterGridWidthTopCardSmall",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed",leadRailAnchor:!0,mediaWidth:"small"}),o.TextAboveCenterFullBleed=n(o,"TextAboveCenterFullBleed",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"}),o.TextAboveCenterFullBleedNoContributor=n(o,"TextAboveCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),o.TextAboveCenterFullBleedTop=n(o,"TextAboveCenterFullBleedTop",{contentAlign:"center",contentPosition:"above",copyWidth:"fullbleed"}),o.TextAboveCenterFullBleedGridWidthCard=n(o,"TextAboveCenterFullBleedGridWidthCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed"}),o.TextAboveCenterFullBleedCard=n(o,"TextAboveCenterFullBleedCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",mediaWidth:"fullbleed",copyWidth:"fullbleed"}),o.TextAboveLeftSmall=n(o,"TextAboveLeftSmall",{contentAlign:"left",contentPosition:"above",leadRailAnchor:!0,mediaWidth:"small"}),o.TextAboveLeftSmallWithRule=n(o,"TextAboveLeftSmallWithRule",{contentAlign:"left",contentPosition:"above",hasLedeLightbox:!0,leadRailAnchor:!0,mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.TextAboveCenterSmallWithRule=n(o,"TextAboveCenterSmallWithRule",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.InlineImage=n(o,"InlineImage",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0},{dividerType:"bottom",hideLede:!0,showContributorImage:!1,stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),o.TextAboveLeftFullBleed=n(o,"TextAboveLeftFullBleed",{contentAlign:"left",contentPosition:"above",copyWidth:"grid",hasLedeLightbox:!0,mediaWidth:"fullbleed"}),o.TextAboveLeftGridWidth=n(o,"TextAboveLeftGridWidth",{contentAlign:"left",contentPosition:"above",mediaWidth:"grid"}),o.TextAboveLeftGridWidthCard=n(o,"TextAboveLeftGridWidthCard",{contentAlign:"left",contentPosition:"above",contentStyle:"card",mediaWidth:"grid"}),o.TextAboveLeftNoImg=n(o,"TextAboveLeftNoImg",{contentAlign:"left",contentPosition:"above"},{className:"content-header--no-lede",lede:null}),o.TextBelowCenterGridWidth=n(o,"TextBelowCenterGridWidth",{contentAlign:"center",contentPosition:"below"}),o.TextBelowCenterFullBleed=n(o,"TextBelowCenterFullBleed",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"}),o.TextBelowCenterFullBleedNoContributor=n(o,"TextBelowCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),o.TextBelowLeftGridWidth=n(o,"TextBelowLeftGridWidth",{contentAlign:"left",contentPosition:"below"}),o.TextBelowLeftGridWidthCard=n(o,"TextBelowLeftGridWidthCard",{contentAlign:"left",contentPosition:"below",contentStyle:"card"}),o.TextBelowLeftFullBleed=n(o,"TextBelowLeftFullBleed",{contentAlign:"left",contentPosition:"below",mediaWidth:"fullbleed"}),o.TextBelowFullBleedDenseCard=n(o,"TextBelowFullBleedDenseCard",{contentAlign:"left",contentPosition:"below",contentStyle:"dense-card",mediaWidth:"fullbleed"}),o.TextOverlay=n(a,"TextOverlayContentHeader",{}),o.TextOverlayWithLogo=n(a,"TextOverlayContentHeaderWithLogo",{}),o.TextOverlayCenterFullBleedGradient=n(a,"TextOverlayCenterFullBleedGradient",{contentAlign:"center",background:"gradient"}),o.SplitScreenImgLeft=n(o,"SplitScreenImgLeft",{contentAlign:"left",contentPosition:"end"}),o.SplitScreenImgRight=n(o,"SplitScreenImgRight",{contentAlign:"left",contentPosition:"start"}),o.SplitScreenImgRightContentCenter=n(o,"SplitScreenImgRightContentCenter",{contentAlign:"center",contentPosition:"start",contentStyle:"card",mediaWidth:"grid"}),o.AssetMiddleCenterBig=n(o,"AssetMiddleCenterBig",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"small"}),o.AssetMiddleCenterFullBleed=n(o,"AssetMiddleCenterFullBleed",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"grid"}),o.SubjectFocus=n(o,"SubjectFocus",{contentAlign:"left",contentPosition:"above",hasExtraSpaceBetweenSeparator:!0,leadRailAnchor:!0,mediaWidth:"small",publishDatePosition:"top",reducedSpacings:!0},{showContributorImage:!1}),o.SplitScreenImageRightFullBleed=n(r,"SplitScreenImageRightFullBleed",{},{isTextRight:!1,showContributorImage:!1}),o.SplitScreenImageRightInset=n(r,"SplitScreenImageRightInset",{},{isInset:!0,isTextRight:!1,showContributorImage:!1}),o.SplitScreenImageLeftFullBleed=n(r,"SplitScreenImageLeftFullBleed",{},{isTextRight:!0,showContributorImage:!1}),o.SplitScreenImageLeftInset=n(r,"SplitScreenImageLeftInset",{},{isInset:!0,isTextRight:!0,showContributorImage:!1}),o.BusinessContentHeader=n(o,"BusinessContentHeader",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",showContentDivider:!0,hideRubric:!0}),e.exports=o},1350:function(e,t,i){const n=i(8),o=i(1),a=i(0),r=i(121),{withLightbox:s}=i(698),l=i(68),{trackComponent:d}=i(5),c=i(21),p=i(44),g=i(36),u=i(156),m=i(78),h=i(101),y=i(11),b=i(1354),f=i(159),C=i(1361),{useNativeShare:v}=i(76),{getThemedBylineVariation:S}=i(207),{ContentHeaderSocialIcons:w}=i(442),{ContentHeaderWrapper:k,ContentHeaderOffersData:x,ContentHeaderLeadOverride:$,ContentHeaderAccreditationBottom:T,ContentHeaderContainer:E,ContentHeaderPublishDate:N,ContentHeaderLeadAssetWrapper:L,ContentHeaderBylines:I,ContentHeaderPersistentAside:B}=i(201),{ContentHeaderDek:P}=i(190),{getOverrideBehaviour:A}=i(316),R=({additionalPhotos:e,authorsTitleBlockPosition:t,awards:i,business:o,bylineVariation:r,captionStyle:l,captionWidth:c,className:p,contentHeaderCategories:g,contentSponsorNames:u,contributorImage:m,contributors:h,ctaText:y,dangerousDek:R,dangerousHed:D,dividerType:M,hasDesktopTitleBlockDivider:H,hasLedeLightboxButton:O,hasLightbox:_,hasSlideshow:W,hasStaticPositionedAward:j,hasStickyBoxIndexPosition:G,hasStickySocialIcons:F,hideByLine:V,hideContributors:U,hideDangerousDek:z,hideRubric:q,hideSocialIconsOnMobile:K,hideTopDisclaimerOnMobile:Y,hideTopRating:Z,hidePublishDate:X,interactiveOverride:J,isBusinessContentHeader:Q,isLiveStoryType:ee,isStoryLive:te,issueDate:ie,issueLink:ne,lede:oe,ledeSocialIcons:ae,offers:re,persistentAsideAlign:se,price:le,publishDate:de,rating:ce,reviewRating:pe,rubric:ge,rubricVariation:ue,itemsCount:me,hasContributorImageBackground:he,metadataVideo:ye,showContentDivider:be,showContributorImage:fe,showSponsorBlock:Ce,showHeaderButton:ve,hideIssueDate:Se,hideIssueDatePipeSeparator:we,hideLede:ke,hideLedeCaption:xe,hasDisabledCloseOnClickForLightbox:$e,hasNarrowHeader:Te,shouldDisplayPremiereDate:Ee,shouldShortenHeadline:Ne,showFullWidthLeadImage:Le,showIssueCopyByDate:Ie,showTextOverlayDek:Be,slideShowVariation:Pe,socialIconsToHide:Ae,socialMedia:Re,socialTitle:De,socialDescription:Me,stickySocialAnchorBottom:He,stickySocialAnchorTop:Oe,theme:_e,sponsoredContentHeaderProps:We,sponsorByline:je,variations:{assetPosition:Ge,copyWidth:Fe,contentAlign:Ve,contentPosition:Ue,contentStyle:ze,hasExtraSpaceBetweenSeparator:qe=!1,hasLedeLightbox:Ke,hasNoRowPadding:Ye,hasInlinePublishDate:Ze,hasXsNavSpacing:Xe,ledeAlign:Je,leadRailAnchor:Qe,mediaWidth:et,publishDatePosition:tt="bottom",reducedSpacings:it=!1},hasNativeShareButton:nt,shouldEnableNativeShareOnDesktop:ot,showBreadCrumb:at,venueAwards:rt,hasInvertedCaption:st,hasInvertedLedeBackground:lt})=>{a.useEffect(()=>{d("ContentHeader",{assetPosition:Ge,copyWidth:Fe,contentAlign:Ve,contentPosition:Ue,contentStyle:ze,hasExtraSpaceBetweenSeparator:qe,hasLedeLightbox:Ke,hasNarrowHeader:Te,hasNoRowPadding:Ye,hasInlinePublishDate:Ze,hasXsNavSpacing:Xe,ledeAlign:Je,leadRailAnchor:Qe,mediaWidth:et,publishDatePosition:tt,reducedSpacings:it})},[]);const dt="middle"===Ge,ct=(e=>e&&1===Object.keys(e).length&&e.author&&1===e.author.items.length)(h)&&Ze,pt="storyimage"===A(J),gt=S({bylineVariation:r,theme:_e}),ut=a.createElement(b,{authorsPosition:t,business:o,bylineVariation:gt,contentHeaderCategories:g,contentSponsorNames:u,contributors:h,dangerousHed:D,dividerType:M,hasContentDivider:be,hasDesktopTitleBlockDivider:H,hasNoRowPadding:Ye,hasExtraSpaceBetweenSeparator:qe,hideIssueDate:Se,hideIssueDatePipeSeparator:we,hideRubric:q,hidePublishDate:X,isBusinessContentHeader:Q,isLiveStoryType:ee,isStoryLive:te,issueDate:ie,issueLink:ne,itemsCount:me,metadataVideo:ye,price:le,publishDate:de,publishDatePosition:tt,rubric:ge,rubricVariation:ue,showIssueCopyByDate:Ie,theme:_e});let mt=f;_&&Ke&&(mt=e?s(f,e,W,Pe,$e):s(f,[oe]));const{showNativeShareButton:ht,pageUrl:yt}=v(nt,ot),bt="hidden"!==t,ft=h&&Object.keys(h).length>1,Ct=h&&!U&&a.createElement(I,{contributors:h,bylineVariation:gt,isCompact:!1,inlinePublishDate:ct}),vt=!X&&a.createElement(N,{inlinePublishDate:ct,"data-testid":"ContentHeaderPublishDate",mediaWidth:et,contentAlign:Ve},de);return a.createElement(k,{className:n("content-header",{[p]:p}),isLiveStoryType:ee,publishDatePosition:tt,hasXsNavSpacing:Xe,contentAlign:Ve,assetPosition:Ge,shouldShowAuthorsInTitleBlock:bt,captionStyle:l,copyWidth:Fe,mediaWidth:et,contentStyle:ze,contentPosition:Ue,isBusinessContentHeader:Q,shouldShortenHeadline:Ne,reducedSpacings:it,hasInvertedCaption:st,containerTheme:_e,shouldBylineContentStacked:ft,hasExtraSpaceBetweenSeparator:qe,hasLede:!!oe,hasNarrowHeader:Te,showBreadCrumb:at,showTextOverlayDek:Be},a.createElement(E,{containerTheme:_e,mediaWidth:et,showFullWidthLeadImage:Le,contentStyle:ze,contentPosition:Ue,"data-testid":"ContentHeaderContainer"},D&&ut,a.createElement(C,{bylinesBlock:Ct,contributorImage:m,dangerousDek:R,hideDangerousDek:z,dividerType:M,hasContributorImageBackground:he,hasDesktopTitleBlockDivider:H,hasLede:!!oe,hideTopRating:Z,hasStickySocialIcons:F,hideByLine:V,hideSocialIconsOnMobile:K,isBusinessContentHeader:Q,isMiddleImage:dt,isSponsoredContent:u.length>0,isLiveStoryType:ee,isStoryLive:te,metadataVideo:ye,publishDateBlock:vt,publishDatePosition:tt,rating:ce,reviewRating:pe,shouldDisplayPremiereDate:Ee,shouldShowAuthorsInTitleBlock:bt,showContributorImage:fe,showSponsorBlock:Ce,socialIconsToHide:Ae,socialMedia:Re,socialTitle:De,socialDescription:Me,sponsorByline:je,sponsoredContentHeaderProps:We,pageUrl:yt,showNativeShareButton:ht,venueAwards:rt,mediaWidth:et,contentAlign:Ve,contentPosition:Ue,theme:_e}),a.createElement(x,{ctaText:y,hideTopDisclaimerOnMobile:Y,offers:re,showHeaderButton:ve,buttonPosition:"content-header"}),pt?a.createElement($,{contentPosition:Ue,dangerouslySetInnerHTML:{__html:J.markup}}):!ke&&oe&&a.createElement(L,{awards:i,hasLightboxButton:O,hasStaticPositionedAward:j,hideLedeCaption:xe,hasDisabledCloseOnClickForLightbox:$e,lede:oe,captionWidth:c,shouldRenderRailAnchor:Qe,socialIcons:ae,mediaWidth:et,containerTheme:_e,hasInvertedLedeBackground:lt,ledeAlign:Je,showFullWidthLeadImage:Le,isBusinessContentHeader:Q,as:mt,className:n({["lead-asset--width-"+et]:et})}),!z&&R&&dt&&a.createElement(T,null,a.createElement(P,{dangerouslySetInnerHTML:{__html:R},assetPosition:Ge,mediaWidth:et,"data-testid":"ContentHeaderDek"}))),!ht&&F&&Re&&a.createElement(B,{attributes:{shouldFadeOnMove:!0},align:se,anchorBottom:He,anchorTop:Oe,hasStickyBoxIndexPosition:G,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(w,Object.assign({},Re,{className:"social-icons--share"}))))};R.propTypes={additionalPhotos:o.array,authorsTitleBlockPosition:o.oneOf(["above","below","hidden"]),awards:o.array,business:o.shape({address:o.object,phone:o.string,email:o.string,socialMedia:o.array}),bylineVariation:o.string,captionStyle:o.oneOf(["default","span-content-well"]),captionWidth:o.oneOf(["standard","fullbleed"]),className:o.string,contentHeaderCategories:o.shape({title:o.string,tags:o.array}),contentSponsorNames:o.array,contributorImage:o.shape(y.propTypes),contributors:o.shape(g.propTypes.contributors),ctaText:o.string,dangerousDek:o.string,dangerousHed:o.string,dividerType:o.oneOf(["both","bottom","top"]),hasContributorImageBackground:o.bool,hasDesktopTitleBlockDivider:o.bool,hasDisabledCloseOnClickForLightbox:o.bool,hasInvertedCaption:o.bool,hasInvertedLedeBackground:o.bool,hasLedeLightboxButton:o.bool,hasLightbox:o.bool,hasNarrowHeader:o.bool,hasNativeShareButton:o.bool,hasSlideshow:o.bool,hasStaticPositionedAward:o.bool,hasStickyBoxIndexPosition:o.bool,hasStickySocialIcons:o.bool,hideByLine:o.bool,hideContributors:o.bool,hideDangerousDek:o.bool,hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,hideLede:o.bool,hideLedeCaption:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideSocialIconsOnMobile:o.bool,hideTopDisclaimerOnMobile:o.bool,hideTopRating:o.bool,interactiveOverride:o.shape({markup:o.string,behavior:o.string}),isBusinessContentHeader:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,issueDate:o.string,issueLink:o.string,itemsCount:o.shape(l.propTypes),lede:o.oneOfType([o.shape(y.propTypes),o.shape(u.propTypes),o.shape(m.propTypes)]),ledeSocialIcons:o.shape(c.propTypes),metadataVideo:o.shape({isLive:o.bool,premiereDate:o.string,premiereGap:o.number,series:o.string,videoLength:o.number}),offers:o.array,persistentAsideAlign:o.oneOf(["left","left-lead-asset"]),price:o.string,publishDate:o.string.isRequired,rating:o.shape(h.propTypes),reviewRating:o.number,rubric:o.shape(p.propTypes),rubricVariation:o.string,shouldDisplayPremiereDate:o.bool,shouldEnableNativeShareOnDesktop:o.bool,shouldShortenHeadline:o.bool,showBreadCrumb:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showFullWidthLeadImage:o.bool,showHeaderButton:o.bool,showIssueCopyByDate:o.bool,showSponsorBlock:o.bool,showTextOverlayDek:o.bool,slideShowVariation:o.string,socialDescription:o.string,socialIconsToHide:o.array,socialMedia:o.shape(c.propTypes),socialTitle:o.string,sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(y.propTypes),sponsorName:o.string}),stickySocialAnchorBottom:r.propTypes.anchorBottom,stickySocialAnchorTop:r.propTypes.anchorTop,theme:o.oneOf(["standard","inverted","special","live"]),variations:o.shape({assetPosition:o.oneOf(["bottom","middle"]),contentAlign:o.oneOf(["center","left"]),contentPosition:o.oneOf(["above","below","start","end"]),contentStyle:o.oneOf(["card","dense-card","item"]),copyWidth:o.oneOf(["grid","fullbleed"]),hasExtraSpaceBetweenSeparator:o.bool,hasInlinePublishDate:o.bool,hasLedeLightbox:o.bool,hasNoRowPadding:o.bool,hasXsNavSpacing:o.bool,leadRailAnchor:o.bool,ledeAlign:o.oneOf(["default","center"]),mediaWidth:o.oneOf(["small","smallrule","grid","fullbleed"]),publishDatePosition:o.oneOf(["top","bottom"]),reducedSpacings:o.bool}),venueAwards:o.string},R.defaultProps={authorsTitleBlockPosition:"hidden",business:{address:{},phone:"",email:"",socialMedia:[],link:""},captionStyle:"default",captionWidth:"standard",contentSponsorNames:[],dividerType:"both",hasContributorImageBackground:!1,hasDesktopTitleBlockDivider:!1,hasInvertedCaption:!1,hasInvertedLedeBackground:!0,hasLightbox:!1,hasNarrowHeader:!1,hasNativeShareButton:!1,hasSlideshow:!1,hasStaticPositionedAward:!1,hasStickySocialIcons:!0,hideByLine:!1,hideContributors:!1,hideDangerousDek:!1,hideIssueDatePipeSeparator:!1,hideLede:!1,hideLedeCaption:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIconsOnMobile:!1,isLiveStoryType:!1,isStoryLive:!1,metadataVideo:{},persistentAsideAlign:"left",shouldDisplayPremiereDate:!1,shouldEnableNativeShareOnDesktop:!1,shouldShortenHeadline:!1,showContentDivider:!1,showContributorImage:!0,showFullWidthLeadImage:!1,showIssueCopyByDate:!1,showSponsorBlock:!1,showTextOverlayDek:!1,socialIconsToHide:[],stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderContainer']",edge:"bottom"},theme:"standard",variations:{contentAlign:"center",contentPosition:"above",hasExtraSpaceBetweenSeparator:!1,hasInlinePublishDate:!1,hasLedeLightbox:!1,hasNoRowPadding:!1,hasXsNavSpacing:!1,leadRailAnchor:!1,ledeAlign:"default",publishDatePosition:"bottom",reducedSpacings:!1}},R.displayName="ContentHeader",e.exports=R},1351:function(e,t,i){const n=i(0),o=i(163),a=i(8),{createGlobalStyle:r}=i(3),s=i(1381),l=i(47),d=i(1455),c=i(693),p=i(682),{useIntl:g}=i(2),u=i(1352).default,m=i(362),h=i(1353),y=i(30),{trackComponent:b}=i(5),{LightboxCloseButtonIcon:f,LightboxSwipe:C,LightboxWrapper:v,LightboxSlidesWrapper:S}=i(443),{getColorToken:w,getZIndex:k}=i(4);let x;const $=r`
  .lightbox {
    height: 100vh;
  }

  .body__lightbox--open {
    overflow: hidden;
  }

  .lightbox__overlay {
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.2s;
    opacity: 0;
    z-index: ${k("hyperstitialLayer")};
    background-color: ${({theme:e})=>w(e,"colors.consumption.lead.standard.background")};

    &.lightbox__overlay--open {
      opacity: 1;

      &.lightbox__overlay--closing {
        opacity: 0;
      }
    }
  }

  .listicle-variation {
    overflow-y: scroll;
  }
`;e.exports={withLightbox:(e,t,i,r,w=!1)=>k=>{const[T,E]=n.useState(-1),{formatMessage:N}=g(),L=e=>i&&E(s(T+e,0,t.length-1)),I=T>-1,B=e=>{var t;"swipeClose"!==e&&("IMG"===(t=e.target).tagName||"SPAN"===t.tagName)||E(void 0)},P={transform:`translate(${"listicle"===r?"0":-100*T/t.length}%)`},A=()=>{x&&(x.style.height=window.innerHeight+"px")};n.useEffect(()=>{b("LightBox",{Component:e,slides:t,hasSlideShow:i,slideShowVariation:r})}),n.useEffect(()=>{const e=l(A,50);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),n.useEffect(()=>{!I&&x&&p.enableBodyScroll(x)},[I]);const R=(e,t)=>w?{}:t.reduce((t,i)=>Object.assign(Object.assign({},t),{[i]:t=>B(e||t)}),{});return n.createElement(v,null,n.createElement(m.Provider,{value:{expandHandler:e=>E(d(t,{id:e})),isInSlides:e=>c(t,{id:e})}},n.createElement(e,Object.assign({},k))),n.createElement(o,{className:a("lightbox "+(r?r+"-variation":"")),overlayClassName:{base:a("lightbox__overlay"),afterOpen:"lightbox__overlay--open",beforeClose:"lightbox__overlay--closing"},bodyOpenClassName:"body__lightbox--open",isOpen:I,onAfterOpen:()=>{p.disableBodyScroll(x),A()},onRequestClose:()=>{E(void 0)},contentRef:e=>{e&&(x=e)},closeTimeoutMS:200,contentLabel:N(u.contentLabel)},n.createElement(f,{ButtonIcon:y,isIconButton:!0,className:r?r+"-variation-close":"",dataAttrs:{"data-action":"close"},label:N(u.closeButtonIconLabel),onClickHandler:B,role:"button",ariaLabel:N(u.closeButtonIconLabel)}),n.createElement(C,Object.assign({},R("swipeClose",["onSwipeDown","onSwipeUp"]),{onSwipeRight:()=>L(-1),onSwipeLeft:()=>L(1),shouldPreventDefaultEvent:!0}),n.createElement(S,Object.assign({className:r?r+"-variation-slide-wrapper":"",style:P},R("",["onMouseDown","onTouchEnd"])),t.map(e=>n.createElement(h,Object.assign({},e,{className:r?r+"-variation-slide":"",key:e.id}))))),n.createElement($,null)))}}},1352:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({contentLabel:{id:"Lightbox.ContentLabel",defaultMessage:"Photo Gallery",description:"Lightbox component content label"},closeButtonIconLabel:{id:"Lightbox.CloseButtonIconLabel",defaultMessage:"Close Lightbox",description:"Lightbox component close button icon label"}})},1353:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(1),a=i(0),r=i(69),s=i(11),l=i(57),{LightboxSlideWrapper:d,LightboxSlideTopSpacer:c,LightboxSlideImageCaptionOuter:p,LightboxSlideCaptionContainer:g}=i(443),u=e=>{var{caption:t,className:i,credit:o,dangerousCredit:l,dangerousCaption:u}=e,m=n(e,["caption","className","credit","dangerousCredit","dangerousCaption"]);const[h,y]=a.useState("landscape");return a.createElement(d,{className:i,screenOrientation:h},a.createElement(c,null),a.createElement(p,null,a.createElement(s,Object.assign({},m,{contentType:"photo",onAssetLoaded:({width:e,height:t})=>{e<t?y("portrait"):e>t?y("landscape"):e===t&&y("square")}})),a.createElement(g,null,a.createElement(r,{dangerousCaptionText:t||u,dangerousCredit:o||l,hasLinebreak:"portrait"===h}))))};u.propTypes=Object.assign(Object.assign({},l.propTypes),{caption:o.string,credit:o.string,dangerousCaption:o.string,dangerousCredit:o.string}),e.exports=u},1354:function(e,t,i){const n=i(1),o=i(0),{asConfiguredComponent:a}=i(9),r=i(68),s=i(44),l=i(444),d=i(445),c=i(1355),p=i(446),g=i(1359),u=i(113),{ContentHeaderContentDivider:m,ContentHeaderLowerBylineDateBlock:h,ContentHeaderItemCount:y,ContentHeaderHed:b,ContentHeaderTitleBlockWrapper:f}=i(157),C=e=>e.length>0?e[0]:null,v=({authorsPosition:e,business:t,bylineVariation:i,contentHeaderCategories:n,contentSponsorNames:a,contributors:r,dangerousHed:s,dividerType:v,hasContentDivider:S,hasDesktopTitleBlockDivider:w,hasExtraSpaceBetweenSeparator:k,hideIssueDate:x,hideIssueDatePipeSeparator:$,hasNoRowPadding:T,hidePublishDate:E,hideRubric:N,isBusinessContentHeader:L,isLiveStoryType:I,isStoryLive:B,issueDate:P,issueLink:A,itemsCount:R,metadataVideo:D,price:M,publishDate:H,publishDatePosition:O,rubric:_,rubricVariation:W,shouldDisplayLiveIndicator:j,showIssueCopyByDate:G,showItemCount:F,theme:V})=>{const U=S&&"above"!==e,z=w&&("both"===v||"top"===v);return o.createElement(f,{rowWithTopBorder:z,isBusinessContentHeader:L,"data-testid":"ContentHeaderTitleBlockWrapper"},D.isLive&&j&&o.createElement(u,null),o.createElement(c,{authorsPosition:e,bylineVariation:i,contributors:r,hasExtraSpaceBetweenSeparator:k,hasNoRowPadding:T,hideIssueDate:x,hideIssueDatePipeSeparator:$,hidePublishDate:E,hideRubric:N,isLiveStoryType:I,isStoryLive:B,issueDate:P,issueLink:A,price:M,publishDate:H,publishDatePosition:O,rubric:_,rubricVariation:W,showIssueCopyByDate:G,sponsorName:C(a),theme:V}),o.createElement(p,Object.assign({},n)),o.createElement(b,{dangerouslySetInnerHTML:{__html:s},"data-testid":"ContentHeaderHed"}),"below"===e&&o.createElement(h,null,o.createElement(l,{bylineVariation:i,contributors:r}),o.createElement(d,{hasExtraSpaceBetweenSeparator:k,hidePublishDate:E,publishDate:H})),F&&R&&o.createElement(y,Object.assign({},R)),U&&o.createElement(m,null),L&&o.createElement(g,{address:null==t?void 0:t.address,phone:null==t?void 0:t.phone,email:null==t?void 0:t.email,socialMedia:null==t?void 0:t.socialMedia,link:null==t?void 0:t.url}))};v.propTypes={authorsPosition:n.oneOf(["above","below","hidden"]),business:n.shape({address:n.object,phone:n.string,email:n.string,socialMedia:n.array,url:n.string}),bylineVariation:n.string,contentHeaderCategories:n.shape({title:n.string,tags:n.array,hasCategoryEyebrow:n.boolean}),contentSponsorNames:n.array,contributors:n.object,dangerousHed:n.string.isRequired,dividerType:n.string,hasContentDivider:n.bool,hasDesktopTitleBlockDivider:n.bool,hasExtraSpaceBetweenSeparator:n.bool,hasNoRowPadding:n.bool,hideIssueDate:n.bool,hideIssueDatePipeSeparator:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,isBusinessContentHeader:n.bool,isLiveStoryType:n.bool,isStoryLive:n.bool,issueDate:n.string,issueLink:n.string,itemsCount:n.shape(r.propTypes),metadataVideo:n.shape({isLive:n.bool,premiereDate:n.string,series:n.string,videoLength:n.number}),price:n.string,publishDate:n.string,publishDatePosition:n.oneOf(["top","bottom"]),rubric:n.shape(s.propTypes),rubricVariation:n.string,shouldDisplayLiveIndicator:n.bool,showIssueCopyByDate:n.bool,showItemCount:n.bool,theme:n.oneOf(["standard","inverted","special"])},v.defaultProps={authorsPosition:"hidden",contentHeaderCategories:{hasCategoryEyebrow:!1},contentSponsorNames:[],dividerType:"both",hasDesktopTitleBlockDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasNoRowPadding:!1,hideIssueDate:!0,hideIssueDatePipeSeparator:!1,hidePublishDate:!1,hideRubric:!1,isBusinessContentHeader:!1,metadataVideo:{},publishDatePosition:"bottom",shouldDisplayLiveIndicator:!1,showIssueCopyByDate:!1,showItemCount:!1,theme:"standard"},v.displayName="TitleBlock",e.exports=a(v,"TitleBlock"),e.exports.TitleBlock=v},1355:function(e,t,i){const n=i(1),o=i(0),a=i(113),r=i(44),s=i(444),l=i(1356),d=i(445),{ContentHeaderSponsorName:c,ContentHeaderRubricBlock:p,ContentHeaderRubricDateBlock:g,ContentHeaderRubricPrice:u,ContentHeaderRubricContainer:m,ContentHeaderLiveIndicator:h}=i(158),y=({authorsPosition:e,bylineVariation:t,contributors:i,hasExtraSpaceBetweenSeparator:n,hideIssueDate:y,hideIssueDatePipeSeparator:b,hidePublishDate:f,hideRubric:C,isLiveStoryType:v,isStoryLive:S,issueDate:w,issueLink:k,price:x,publishDate:$,publishDatePosition:T,rubric:E,rubricVariation:N,showIssueCopyByDate:L,sponsorName:I})=>{const B=r[N]||r,P=!y&&w&&E,A=("above"===e||"top"===T)&&!I;return v&&S?o.createElement(h,null,o.createElement(a,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0})):!(E||w||i)||C?null:(E||w||i)&&o.createElement(p,{hasIssueDateAndRubricBlock:P,"data-testid":"ContentHeaderRubric"},"above"===e&&o.createElement(s,{bylineVariation:t,contributors:i}),o.createElement(g,{"data-testid":"ContentHeaderRubricDateBlock"},E&&o.createElement(m,Object.assign({},E,{isVerticalAlign:"above"===e||"top"===T||P,as:B})),x&&o.createElement(u,null,"/ ",x),I&&o.createElement(c,{hasExtraSpaceBetweenSeparator:n,items:[{name:I}]}),A&&o.createElement(d,{hasExtraSpaceBetweenSeparator:n,hidePublishDate:f,publishDate:$})),o.createElement(l,{hideIssueDate:y,hideIssueDatePipeSeparator:b,issueDate:w,issueLink:k,showIssueCopyByDate:L}))};y.propTypes={authorsPosition:n.string,bylineVariation:n.string,contributors:n.object,hasExtraSpaceBetweenSeparator:n.bool,hasNoRowPadding:n.bool,hideIssueDate:n.bool,hideIssueDatePipeSeparator:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,isLiveStoryType:n.bool,isStoryLive:n.bool,issueDate:n.string,issueLink:n.string,price:n.string,publishDate:n.string,publishDatePosition:n.string,rubric:n.shape(r.propTypes),rubricVariation:n.string,showIssueCopyByDate:n.bool,sponsorName:n.string},y.defaultProps={isLiveStoryType:!1,isStoryLive:!1},e.exports=y},1356:function(e,t,i){const n=i(1),o=i(0),{ContentHeaderRubricIssueDate:a}=i(158),r=({hideIssueDate:e,hideIssueDatePipeSeparator:t,issueDate:i,issueLink:n,showIssueCopyByDate:r})=>e||!i?null:o.createElement(a,{name:`${i}${r?" Issue":""}`,url:n,hideIssueDatePipeSeparator:t});r.propTypes={hideIssueDate:n.bool,hideIssueDatePipeSeparator:n.bool,issueDate:n.string,issueLink:n.string,showIssueCopyByDate:n.bool},e.exports=r},1357:function(e,t,i){const n=i(1),o=i(0),{CategoriesWrapper:a,CategoriesTitle:r,CategoriesItemList:s,CategoriesItem:l,CategoriesLink:d}=i(1358),c=({title:e,tags:t})=>o.createElement(a,null,o.createElement(r,null,e),o.createElement(s,null,t.map(e=>o.createElement(l,{key:e.name},o.createElement(d,{href:e.slug},e.name)))));c.propTypes={tags:n.array,title:n.string},c.defaultProps={tags:[]},c.displayName="Categories",e.exports=c},1358:function(e,t,i){const{default:n}=i(3),{BaseText:o,BaseLink:a}=i(10),{calculateSpacing:r,getColorToken:s,getLinkStyles:l}=i(4),d=n.div.withConfig({displayName:"CategoriesWrapper"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: ${r(.5)};
`,c=n(o).withConfig({displayName:"CategoriesTitle"})`
  margin-right: ${r(1)};
`;c.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-feature"};const p=n.ul.withConfig({displayName:"CategoriesItemList"})`
  margin: 0;
  padding: 0;
  line-height: 1;
`,g=n.li.withConfig({displayName:"CategoriesItem"})`
  display: inline-block;

  &:not(:last-child) {
    &::after {
      margin: 0 ${r(1)};
      color: ${({theme:e})=>s(e,"colors.consumption.lead.standard.divider")};
      content: '|';
    }
  }
`,u=n(a).withConfig({displayName:"CategoriesLink"})`
  ${({theme:e})=>l(e,"colors.consumption.lead.standard.link",null,"global")};
`;u.defaultProps={typeToken:"typography.definitions.globalEditorial.accreditation-core"},e.exports={CategoriesWrapper:d,CategoriesTitle:c,CategoriesItemList:p,CategoriesItem:g,CategoriesLink:u}},1359:function(e,t,i){const n=i(0),o=i(1),{AddressBlockWrapper:a,HeaderSocialInformation:r}=i(157),s=i(205),l=i(206),d=i(1360),c=({address:e,email:t,phone:i,socialMedia:o,link:c})=>{if(!e&&!i&&!t)return null;const{street:p,city:g,state:u,postalCode:m,country:h}=e,y=[];return[p,g,u,m,h].forEach(e=>{e&&y.push(e)}),n.createElement(a,null,e&&n.createElement("div",{"data-testid":"HeaderAddressDetails"},p&&n.createElement("span",{"data-testid":"HeaderAddressStreet"},p),g&&n.createElement("span",{"data-testid":"HeaderAddressCity"},y[0]!==g&&", ",g),u&&n.createElement("span",{"data-testid":"HeaderAddressState"},y[0]!==u&&", ",u),m&&n.createElement("span",{"data-testid":"HeaderAddressPostalCode"},y[0]!==m&&", ",m),h&&n.createElement("span",{"data-testid":"HeaderAddressCountry"},y[0]!==h&&", ",h)),i&&n.createElement("div",{"data-testid":"HeaderAddressPhone",dangerouslySetInnerHTML:{__html:i}}),n.createElement(r,null,t&&n.createElement("a",{"data-testid":"HeaderAddressEmail",href:"mailto:"+t,"aria-label":t,rel:"nofollow noopener noreferrer",target:"_blank"},s()),c&&n.createElement("a",{"data-testid":"HeaderAddressEmail",href:c,"aria-label":c,rel:"nofollow noopener noreferrer",target:"_blank"},d()),(null==o?void 0:o.length)>0&&n.createElement("a",{"data-testid":"HeaderAddressInstagram",href:o[0].handle,"aria-label":o[0].network,rel:"nofollow noopener noreferrer",target:"_blank"},l())))};c.propTypes={address:o.object,email:o.string,link:o.string,phone:o.string,socialMedia:o.array},e.exports=c},1360:function(e,t,i){const n=i(0),{useIntl:o}=i(2),a=i(7).default;e.exports=()=>{const{formatMessage:e}=o();return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"},n.createElement("title",null,e(a.weblink)),n.createElement("path",{d:"M15.8136 11.1823L17.6157 9.38027C18.3786 8.68488 19.3802 8.31019 20.4122 8.33408C21.4443 8.35797 22.4275 8.77861 23.1574 9.50857C23.8874 10.2385 24.3081 11.2217 24.3319 12.2537C24.3558 13.2858 23.9812 14.2874 23.2858 15.0503L20.7101 17.6169C20.3389 17.9894 19.8978 18.2851 19.412 18.4868C18.9263 18.6885 18.4056 18.7924 17.8796 18.7924C17.3537 18.7924 16.8329 18.6885 16.3472 18.4868C15.8615 18.2851 15.4203 17.9894 15.0491 17.6169M16.8524 21.4857L15.0503 23.2878C14.2874 23.9832 13.2858 24.3578 12.2537 24.334C11.2217 24.3101 10.2385 23.8894 9.50858 23.1595C8.77861 22.4295 8.35797 21.4463 8.33408 20.4143C8.3102 19.3822 8.68488 18.3807 9.38029 17.6177L11.9559 15.0512C12.3271 14.6786 12.7682 14.3829 13.254 14.1812C13.7397 13.9795 14.2604 13.8756 14.7864 13.8756C15.3123 13.8756 15.8331 13.9795 16.3188 14.1812C16.8045 14.3829 17.2457 14.6786 17.6169 15.0512",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))}},1361:function(e,t,i){const n=i(0),{useIntl:o}=i(2),a=i(1),r=i(447),s=i(699),l=i(11),d=i(101),c=i(21),p=i(139),g=i(133).default,u=i(448),m=i(390),{ContentHeaderByline:h,ContentHeaderAccreditationSocialIcons:y,ContentHeaderContributorImage:b,ContentHeaderNativeShareButton:f,ContentHeaderBylineContent:C,ContentHeaderDekRewards:v,ContentHeaderAccreditation:S,ContentHeaderDek:w,SummaryPremiereWrapper:k}=i(190),x=({venueAwards:e})=>n.createElement(n.Fragment,null,e&&n.createElement(v,{dangerouslySetInnerHTML:{__html:e}}));x.propTypes={venueAwards:a.string};const $=({bylinesBlock:e,contributorImage:t,dangerousDek:i,dividerType:a,hasContributorImageBackground:l,hasDesktopTitleBlockDivider:c,hasLede:v,hasStickySocialIcons:$,hideByLine:T,hideDangerousDek:E,hideSocialIconsOnMobile:N,hideTopRating:L,isBusinessContentHeader:I,isMiddleImage:B,isSponsoredContent:P,showSponsorBlock:A,sponsorByline:R,sponsoredContentHeaderProps:D,isLiveStoryType:M,metadataVideo:H,publishDateBlock:O,publishDatePosition:_,rating:W,reviewRating:j,shouldShowAuthorsInTitleBlock:G,showContributorImage:F,socialIconsToHide:V,socialMedia:U,socialTitle:z,socialDescription:q,pageUrl:K,shouldDisplayPremiereDate:Y,showNativeShareButton:Z,venueAwards:X,theme:J})=>{const{rating:Q,count:ee}=W||{},te=x({venueAwards:X}),ie={showDek:!E&&i&&!B,showVenueAwards:X,showByline:!G&&!P&&!T,showNativeShareButton:Z,socialMedia:U},{isLive:ne,premiereGap:oe,premiereDate:ae}=H,{formatMessage:re}=o();return n.createElement(S,{className:"content-header__accreditation",shouldShowAuthorsInTitleBlock:G,isBusinessContentHeader:I,hasLede:v,rowWithBottomBorder:c&&("both"===a||"bottom"===a),visibilityInfo:ie,"data-testid":"ContentHeaderAccreditation"},ie.showDek&&n.createElement(w,{dangerouslySetInnerHTML:{__html:i},as:"div"}),Y&&ae&&!ne&&n.createElement(k,null,n.createElement(m,{premiereDate:ae,premiereGap:oe,containerTheme:J,hideTimeStampIcon:!0})),M&&A&&n.createElement(u,{sponsorByline:R,sponsoredContentHeaderProps:Object.assign({},D),theme:J}),te,j&&!L&&n.createElement(s,{rating:j}),ie.showByline&&n.createElement(h,{isLiveStoryType:M,sponsorName:null==D?void 0:D.sponsorName,showSponsorBlock:A},F&&t&&n.createElement(b,Object.assign({},t,{sizes:"66px",hasContributorImageBackground:l,isBusinessContentHeader:I})),n.createElement(C,null,e,"bottom"===_&&O)),Z?n.createElement(f,null,n.createElement(p,{shareData:{url:K,title:z,text:q}})):U&&n.createElement(y,Object.assign({},U,{className:"content-header__social-share",hideSocialIconsOnMobile:N,hasStickySocialIcons:$,socialIconsToHide:V})),!!Q&&!!ee&&n.createElement(d,{averageRatingCount:Math.round(10*Q)/10,hasBorderTop:!0,link:{label:re(g.readReviews),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:i}=r(t);window.scrollTo(0,i-56)},url:"#reviews"},totalRatingCount:ee}))};$.propTypes={bylinesBlock:a.node,contributorImage:a.shape(l.propTypes),dangerousDek:a.string,dividerType:a.string,hasContributorImageBackground:a.bool,hasDesktopTitleBlockDivider:a.bool,hasLede:a.bool,hasStickySocialIcons:a.bool,hideByLine:a.bool,hideDangerousDek:a.bool,hideSocialIconsOnMobile:a.bool,hideTopRating:a.bool,isBusinessContentHeader:a.bool,isLiveStoryType:a.bool,isMiddleImage:a.bool,isSponsoredContent:a.bool,metadataVideo:a.shape({isLive:a.bool,premiereDate:a.string,premiereGap:a.number,series:a.string,videoLength:a.number}),pageUrl:a.string,publishDateBlock:a.node,publishDatePosition:a.string,rating:a.shape(d.propTypes),reviewRating:a.number,shouldDisplayPremiereDate:a.bool,shouldShowAuthorsInTitleBlock:a.bool,showContributorImage:a.bool,showNativeShareButton:a.bool,showSponsorBlock:a.bool,socialDescription:a.string,socialIconsToHide:a.array,socialMedia:a.shape(c.propTypes),socialTitle:a.string,sponsorByline:a.string,sponsoredContentHeaderProps:a.shape({campaignUrl:a.string,sponsorLogo:a.shape(l.propTypes),sponsorName:a.string}),theme:a.oneOf(["standard","inverted","special"]),venueAwards:a.string},$.defaultProps={hideByLine:!1,hideDangerousDek:!1,isLiveStoryType:!1,metadataVideo:{},shouldDisplayPremiereDate:!1,showSponsorBlock:!1,socialIconsToHide:[],theme:"standard"},e.exports=$},1362:function(e,t,i){const n=i(1),o=i(8),a=i(0),{useIntl:r}=i(2),s=i(329),l=i(14),d=i(197),{trackComponent:c}=i(5),p=i(1363).default,{ReviewRatingDataLabel:g,ReviewRatingDataWrapper:u,ReviewRatingDataValue:m,ReviewRatingDataExplainer:h,ReviewRatingDataExplainerModal:y,ReviewRatingDataExplainerModalList:b,ReviewRatingDataExplainerModalListRating:f,ReviewRatingDataExplainerModalListDescribe:C}=i(1364),v=({className:e,rating:t,ratingList:i})=>{a.useEffect(()=>{c("ReviewRatingData")},[]);const n=r(),[v,S]=a.useState(!0),w=()=>{S(!v)},k=a.createElement(y,{className:"review-rating-data__rating-explainer-modal"},i.map((e,t)=>a.createElement(b,{key:e},a.createElement(f,{as:"span"},t+1),a.createElement(C,{as:"span"},e))));return a.createElement(u,{className:o("review-rating-data",e)},a.createElement(g,{className:"review-rating-data__label"},n.formatMessage(p.dataLabel)),a.createElement(m,null,t,"/10"),a.createElement(h,null,a.createElement(l.Utility,{isIconButton:!0,ButtonIcon:s,className:"review-rating-data__info-button",label:n.formatMessage(p.buttonLabel),onClickHandler:w,role:"button"}),!v&&a.createElement(d,{className:"alert__tooltip",arrowPosition:52,gaIdentifier:"review-rating-explainer",isVisible:!0,isTooltip:!0,onClose:w,shouldUseArrow:!0},k)))};v.propTypes={className:n.string,rating:n.number,ratingList:n.array},v.defaultProps={rating:0,ratingList:[]},v.displayName="ReviewRatingData",e.exports=v},1363:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({dataLabel:{id:"ReviewRatingData.DataLabel",defaultMessage:"Rating:",description:"Label for rating"},buttonLabel:{id:"ReviewRatingData.ButtonLabel",defaultMessage:"Open rating explainer",description:"Label for rating explainer button"}})},1364:function(e,t,i){const n=i(3).default,{BaseText:o}=i(10),{calculateSpacing:a,getTypographyStyles:r,getColorToken:s}=i(4),l=n.div.withConfig({displayName:"ReviewRatingDataWrapper"})`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-top: ${a(2)};
  width: 100%;
`,d=n(o).withConfig({displayName:"ReviewRatingDataLabel"})`
  margin-right: ${a(1)};
`;d.defaultProps={as:"span",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const c=n(o).withConfig({displayName:"ReviewRatingDataValue"})`
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.subhed-aux-primary")}
  color: ${({theme:e})=>s(e,"colors.consumption.body.standard.subhed")};
`,p=n.div.withConfig({displayName:"ReviewRatingDataExplainer"})`
  margin-left: ${a(.5)};

  .review-rating-data__info-button,
  .review-ratingdata__close-button {
    margin: 0;
    border: 0;
    background-color: ${({theme:e})=>s(e,"colors.interactive.base.white")};
    fill: ${({theme:e})=>s(e,"colors.consumption.body.standard.accent")};
    padding: 0;

    &:hover,
    &:focus {
      border: 0;
      background: none;
    }
  }

  .icon {
    padding-right: 5px;
    width: 24px;
    height: 24px;
  }

  .review-rating-data__info-button {
    .button__icon-container,
    .icon {
      padding-right: 0;
      width: 18px;
      height: 18px;
    }
  }

  .icon.icon-close {
    width: 35px;
    height: 35px;
  }
`,g=n.div.withConfig({displayName:"ReviewRatingDataExplainerModal"})`
  padding: ${a(2)} 0 ${a(2)}
    ${a(2)};
`,u=n.div.withConfig({displayName:"ReviewRatingDataExplainerModalList"})`
  display: flex;
  letter-spacing: 0;
`,m=n.span.withConfig({displayName:"ReviewRatingDataExplainerModalListRating"})`
  flex: 1;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
  font-weight: bold;
`,h=n.span.withConfig({displayName:"ReviewRatingDataExplainerModalListDescribe"})`
  flex: 9;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
`;e.exports={ReviewRatingDataLabel:d,ReviewRatingDataWrapper:l,ReviewRatingDataValue:c,ReviewRatingDataExplainer:p,ReviewRatingDataExplainerModal:g,ReviewRatingDataExplainerModalList:u,ReviewRatingDataExplainerModalListRating:m,ReviewRatingDataExplainerModalListDescribe:h}},1365:function(e,t,i){const{default:n}=i(3),{BREAKPOINTS:o}=i(6),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=i(4),l=i(11),{SpanWrapper:d}=i(84),c=i(33),p=n.div.withConfig({displayName:"SponsorContentContainer"})`
  margin-top: ${a(3)};
  text-align: center;
  ${d} {
    display: inline-flex;
    margin-top: 0;
    margin-bottom: 0;
    width: 66px;
  }
`,g=n(l).withConfig({displayName:"SponsorImage"})`
  margin-right: auto;
  margin-left: auto;

  img {
    border: 1px solid;
    border-radius: 50%;
    ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      border-color: ${r(t,"colors.consumption.lead.inverted.divider")};\n    `:`\n    border-color: ${r(t,"colors.consumption.lead.standard.divider")};\n  `)(e,t)}
    width: 64px;
    height: 64px;
  }
`,u=n.div.withConfig({displayName:"SponsoredContent"})`
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.syndication")}

  display: block;
  margin: ${a(2,"px")} 0 ${a(2,"px")};
  ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      color: ${r(t,"colors.consumption.lead.inverted.syndication")};\n    `:`\n    color: ${r(t,"colors.consumption.lead.standard.syndication")};\n  `)(e,t)}

  @media (min-width: 0) and (max-width: ${o.md}) {
    margin: ${a(1.5,"px")} 0 ${a(1.5,"px")};
  }
`,m=n(c).withConfig({displayName:"SponsoredContentCampaignLink"})`
  text-decoration: none;
`;e.exports={SponsorContentContainer:p,SponsorImage:g,SponsoredContent:u,SponsoredContentCampaignLink:m}},1366:function(e,t,i){const n=i(1367);e.exports=n},1367:function(e,t,i){const n=i(0),o=i(1),a=i(69),r=i(44),s=i(139),l=i(36),d=i(11),c=i(156),p=i(78),g=i(21),u=i(446),m=i(1368),h=i(113),{useNativeShare:y}=i(76),{TextOverlayLogo:b,TextOverlayLogoLink:f,TextOverlayLogoImage:C,TextOverlayWrapper:v,ImageWrapper:S,Content:w,ContentAlign:k,Hed:x,DekWrapper:$,Dek:T,Figure:E,ContentDivider:N,ContributorImage:L,Accreditation:I,PublishDate:B,DekAndCaption:P,ContentGrid:A}=i(449),R=i(208),D=i(448),M=({background:e,bylineVariation:t,contentAlign:i,contentHeaderCategories:o,contributorImage:c,contributors:p,dangerousDek:M,dangerousHed:H,hasNativeShareButton:O,hideContributors:_,hideDangerousDek:W,hideLedeCaption:j,hidePublishDate:G,hideShareButtons:F,hideRubric:V,isLiveStoryType:U,isStoryLive:z,lede:q,logoImage:K,logoBaseUrl:Y,numberOfLinesToClamp:Z,publishDate:X,rubric:J,shouldUseCutomColorLiveIndicator:Q,showContentDivider:ee,showContributorImage:te,showLogo:ie,showTextOverlayDek:ne,showSponsorBlock:oe,socialDescription:ae,socialMedia:re,socialTitle:se,theme:le,sponsoredContentHeaderProps:de,sponsorByline:ce})=>{const{showNativeShareButton:pe,pageUrl:ge}=y(O),ue="inverted"===le,me=q&&!j&&(q.caption&&q.caption.trim()||q.credit&&q.credit.trim());return n.createElement(v,{"data-testid":"ContentHeader"},n.createElement(S,{background:e,contentAlign:i},n.createElement(m,{lede:q}),ie&&K?n.createElement(b,null,n.createElement(f,{href:Y},n.createElement(C,Object.assign({},K)))):null,n.createElement(A,{contentAlign:i},n.createElement(w,null,!V&&(U&&z?n.createElement(k,{contentAlign:i},n.createElement(h,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0,shouldUseCutomColorLiveIndicator:Q})):J?n.createElement(k,{contentAlign:i,"data-testid":"ContentHeaderRubric"},n.createElement(r.Inverted,Object.assign({},J))):null),n.createElement(k,{contentAlign:i},n.createElement(u,Object.assign({},o))),n.createElement(x,{dangerouslySetInnerHTML:{__html:H},"data-testid":"ContentHeaderHed",contentAlign:i}),!W&&M&&ne&&n.createElement(T,{dangerouslySetInnerHTML:{__html:M},contentAlign:i,"data-testid":"ContentHeaderDek",isInverted:ue}),ee&&n.createElement(N,{contentAlign:i}),U&&oe?n.createElement(D,{sponsorByline:ce,sponsoredContentHeaderProps:Object.assign({},de)}):null,te&&c&&n.createElement(L,{contentAlign:i},n.createElement(d,Object.assign({},c))),n.createElement(I,{contentAlign:i},p&&!_&&n.createElement(l,{contributors:p,bylineVariation:t,contentAlign:i,isCompact:!1}),!G&&n.createElement(B,{"data-testid":"ContentHeaderPublishDate",contentAlign:i},X)),!F&&(pe?n.createElement(k,{contentAlign:i,bottomSpacing:4},n.createElement(s,{hasDarkBackground:!0,shareData:{url:ge,title:se,text:ae},theme:"inverted"})):re&&n.createElement(k,{contentAlign:i,bottomSpacing:4},n.createElement(g.Footer,Object.assign({},re))))))),(me||M&&!W)&&n.createElement(P,{isInverted:ue},me&&n.createElement(E,{contentAlign:i},n.createElement(a,{dangerousCaptionText:q.caption,dangerousCredit:q.credit,topSpacing:0,theme:le})),!W&&M&&!ne&&n.createElement($,null,n.createElement(R,{isCollapsible:!0,lines:Z},n.createElement(T,{dangerouslySetInnerHTML:{__html:M},contentAlign:i,"data-testid":"ContentHeaderDek",isInverted:ue})))))};M.defaultProps={background:"gradient",bylineVariation:"Inverted",contentAlign:"center",hideContributors:!1,hideDangerousDek:!1,hideLedeCaption:!1,isLiveStoryType:!1,isStoryLive:!1,logoBaseUrl:"/",numberOfLinesToClamp:2,shouldUseCutomColorLiveIndicator:!1,showContentDivider:!1,showContributorImage:!0,showSponsorBlock:!1,showTextOverlayDek:!1},M.propTypes={background:o.oneOf(["gradient","solid"]),bylineVariation:o.string,contentAlign:o.oneOf(["center","left"]),contentHeaderCategories:o.shape({title:o.string,tags:o.array}),contributorImage:o.shape(d.propTypes),contributors:o.shape(l.propTypes.contributors),dangerousDek:o.string,dangerousHed:o.string,hasNativeShareButton:o.bool,hideContributors:o.bool,hideDangerousDek:o.bool,hideLedeCaption:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideShareButtons:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,lede:o.oneOfType([o.shape(d.propTypes),o.shape(c.propTypes),o.shape(p.propTypes)]),logoBaseUrl:o.string,logoImage:o.shape(d.propTypes),numberOfLinesToClamp:o.number,publishDate:o.string,rubric:o.shape(r.propTypes),shouldUseCutomColorLiveIndicator:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showLogo:o.bool,showSponsorBlock:o.bool,showTextOverlayDek:o.bool,socialDescription:o.string,socialMedia:o.shape(g.propTypes),socialTitle:o.string,sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(d.propTypes),sponsorName:o.string}),theme:o.oneOf(["standard","inverted","special"])},M.displayName="TextOverlay",e.exports=M},1368:function(e,t,i){const n=i(0),o=i(1),a=i(11),r=i(156),s=i(78),{transformLegacySources:l}=i(76),{Image:d}=i(449),c=({lede:e})=>{if(!e||0===Object.keys(e).length)return null;const t="cnevideo"===e.modelName,i="gallery"===e.modelName,o=l(e);return n.createElement(d,null,!t&&!i&&n.createElement(a,Object.assign({},o)),t&&e.scriptEmbedUrl&&n.createElement(s,{shouldAutoplay:!0,scriptUrl:e.scriptEmbedUrl}),i&&n.createElement(r,Object.assign({},e,{showNoAdsFromParent:!0})))};c.defaultProps={lede:null},c.propTypes={lede:o.oneOfType([o.shape(a.propTypes),o.shape(r.propTypes),o.shape(s.propTypes)])},c.displayName="ImageBlock",e.exports=c},1369:function(e,t,i){e.exports=i(1370)},1370:function(e,t,i){const n=i(8),o=i(1),a=i(0),{useIntl:r}=i(2),s=i(45),l=i(1371).default,{mapSourcesToSegmentedSources:d}=i(172),c=i(1372),p=i(11),g=i(44),u=i(700),m=i(1373),h=i(36),y=i(121),b=i(21),f=i(101),C=i(447),{formatInfoSliceItems:v}=i(1378),S=i(139),{useNativeShare:w}=i(76),{getThemedBylineVariation:k}=i(207),{trackComponent:x}=i(5),{SplitScreenContentHeaderArtist:$,SplitScreenContentHeaderArtistSlash:T,SplitScreenContentHeaderArtistWrapper:E,SplitScreenContentHeaderByline:N,SplitScreenContentHeaderCaption:L,SplitScreenContentHeaderContributorImage:I,SplitScreenContentHeaderDek:B,SplitScreenContentHeaderDekDown:P,SplitScreenContentHeaderDivider:A,SplitScreenContentHeaderHed:R,SplitScreenContentHeaderMain:D,SplitScreenContentHeaderInfoSlice:M,SplitScreenContentHeaderForMusicReview:H,SplitScreenContentHeaderNativeShareButton:O,SplitScreenContentHeaderPublishDate:_,SplitScreenContentHeaderRating:W,SplitScreenContentHeaderRubric:j,SplitScreenContentHeaderRubricIssueDate:G,SplitScreenContentHeaderSignageRubric:F,SplitScreenContentHeaderSocialShare:V,SplitScreenContentHeaderTitleBlock:U,SplitScreenContentHeaderWrapper:z,SplitScreenContentHeaderScoreBox:q,SplitScreenContentHeaderLeadWrapper:K,SplitScreenContentHeaderArtistLink:Y,SplitScreenContentHeaderGrid:Z,SplitScreenContentHeaderPersistentAside:X,SplitScreenContentHeaderReleaseYear:J}=i(202),{SplitScreenContentHeaderSocialIcons:Q}=i(441),{doHideBookmark:ee,doDisplayBookmark:te}=i(413),ie=({contributors:e,contributorsPosition:t,hasInvertedBylineLink:i,hideContributors:n,hideIssueDate:o,hidePublishDate:r,issueDate:s,issueDatePostfix:l,issueLink:d,publishDate:c,publishDatePosition:p,rubric:u,rubricVariation:m,hideRubric:h,themedBylineVariation:y})=>{const b=g[m]||g,f=g.Item,C=e&&0!==Object.keys(e).length;return a.createElement("div",{"data-testid":"ContentHeaderRubric"},C&&!n&&"top"===t&&a.createElement(N,{contributors:e,bylineVariation:y,isCompact:!1,contributorsPosition:t,hasInvertedBylineLink:i}),u&&!h&&a.createElement(j,Object.assign({as:b},u)),!o&&s&&a.createElement(G,{as:f,name:l?`${s}${l}`:s,url:d}),!r&&c&&"top"===p&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},c))};ie.propTypes={contributors:o.object,contributorsPosition:o.oneOf(["top","bottom"]),hasInvertedBylineLink:o.bool,hideContributors:o.bool,hideIssueDate:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,issueDate:o.string,issueDatePostfix:o.string,issueLink:o.string,publishDate:o.string,publishDatePosition:o.oneOf(["top","bottom"]),rubric:o.shape(g.propTypes),rubricVariation:o.string,themedBylineVariation:o.string};const ne=({signage:e,shouldDisplaySignage:t})=>e&&t?a.createElement("div",{"data-testid":"ContentHeaderRubricSignage"},a.createElement(F,{name:e})):null;ne.propTypes={shouldDisplaySignage:o.bool,signage:o.string};const oe=(e,t,i,n,o)=>n&&a.createElement(V,Object.assign({},n,{hasSocialShare:!0,hasStickySocialIcons:e,hideSocialIconsOnMobile:t,socialIconsToHide:i,socialMediaPositionInMobile:o})),ae=(e,t)=>((null==t?void 0:t.caption)||(null==t?void 0:t.credit))&&!e&&a.createElement(Z,null,a.createElement(L,{dangerousCaptionText:t.caption,dangerousCredit:t.credit})),{useRef:re,useEffect:se}=a,le=({artists:e,brandSlug:t,captionPosition:o,className:p,contentAlign:g,contributorImage:h,dangerousHed:y,dangerousDek:b,hasContributorImageBackground:f,hasInvertedBylineLink:L,hasMargin:j,hasStickySocialIcons:G,hasNativeShareButton:F,hideContributorTitle:V,hideContributors:le,hideDangerousDek:de,hideIssueDate:ce,hidePublishDate:pe,hideRubric:ge,socialIconsToHide:ue,hideSocialIconsOnMobile:me,hideCaption:he,imageAlignment:ye,infoSliceFields:be,isInset:fe,isMusicReview:Ce,isTextRight:ve,isTrackReview:Se,issueDate:we,issueDatePostfix:ke,issueLink:xe,isSplitScreenArtistLarge:$e,rubric:Te,rubricVariation:Ee,contributors:Ne,contributorsPosition:Le,bylineVariation:Ie,persistentAsideAlign:Be,publishDate:Pe,publishDatePosition:Ae,lede:Re,ledeContentAlign:De,musicRating:Me,shouldEnableNativeShareOnDesktop:He,shouldFitToViewport:Oe,showBookmarked:_e,shouldHeaderFitToViewport:We,showContentDivider:je,showContributorImage:Ge,showHeaderDivider:Fe,socialDescription:Ve,socialMedia:Ue,socialMediaPositionInMobile:ze,socialTitle:qe,stickySocialAnchorBottom:Ke,stickySocialAnchorTop:Ye,theme:Ze,rating:Xe,signage:Je,shouldDisplaySignage:Qe,showReviewLink:et,textAlign:tt})=>{a.useEffect(()=>{x("SplitScreenContentHeader")},[]);const it=k({bylineVariation:Ie,theme:Ze}),{showNativeShareButton:nt,pageUrl:ot}=w(F,He),{score:at,isBestNewMusic:rt,isBestNewReissue:st}=Me,lt=v(be),dt=null==be?void 0:be.releaseYear,ct=(e=>{if(!e)return;const t=Object.assign({},e);return new Set(["photo","cartoon"]).has(e.contentType)&&!e.segmentedSources&&e.sources&&(t.segmentedSources=d(e.sources)),t})(Re),pt="cnevideo"===(null==Re?void 0:Re.modelName),gt=!Re||pt,{rating:ut,count:mt}=Xe||{},{BookmarkIcon:ht}=i(214),yt=Ce?H:D,{formatMessage:bt}=r(),ft={},Ct=re();"belowImage"===o&&(ft.captionCredit=ae(he,Re)),"inLeadWrapperBelowImg"===ze&&(ft.socialMedia=oe(G,me,ue,Ue,ze));const vt=()=>{(e=>{const t=e.current&&e.current.offsetTop,i=window.pageYOffset;return Math.abs(i)>Math.abs(t)})(Ct)?te():ee()};return se(()=>{const e=s(vt,100);return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}),a.createElement(z,{className:n("content-header",{[p]:p}),contentHeaderTheme:Ze,isFullWidth:gt,isTextRight:ve,isInset:fe,imageAlignment:ye,ledeContentAlign:De,shouldFitToViewport:!Oe,isMusicReview:Ce,"data-testid":"SplitScreenContentHeaderWrapper",showHeaderDivider:Fe,socialMediaPositionInMobile:ze,shouldHeaderFitToViewport:We,captionPosition:o,hidePublishDate:pe,mediaContentType:(null==ct?void 0:ct.contentType)||"",hasInvertedBylineLink:L,hasMargin:j},a.createElement(yt,{shouldFitToViewport:!Oe},a.createElement(U,{contentAlign:g,textAlign:tt},a.createElement(ne,{signage:Je,shouldDisplaySignage:Qe}),a.createElement(ie,Object.assign({},{contributors:Ne,contributorsPosition:Le,rubric:Te,rubricVariation:Ee,hideContributors:le,hideIssueDate:ce,hidePublishDate:pe,issueDate:we,issueDatePostfix:ke,issueLink:xe,publishDate:Pe,publishDatePosition:Ae,hideRubric:ge,hasInvertedBylineLink:L,themedBylineVariation:it})),a.createElement(R,{dangerouslySetInnerHTML:{__html:y},"data-testid":"ContentHeaderHed",isMusicReview:Ce}),je&&a.createElement(A,{ledeContentAlign:De}),e&&Ce?a.createElement(E,{isMusicReview:Ce},0===e.length&&a.createElement($,{isSplitScreenArtistLarge:$e},bt(l.variousArtists)),e.map((t,i)=>a.createElement(a.Fragment,{key:i},a.createElement(Y,{key:i,href:"/".concat(t.uri)},a.createElement($,{dangerouslySetInnerHTML:{__html:t.name},isSplitScreenArtistLarge:$e})),!(i===e.length-1)&&a.createElement(T,{dangerouslySetInnerHTML:{__html:" / "},isSplitScreenArtistLarge:$e})))):!de&&b&&a.createElement(B,{dangerouslySetInnerHTML:{__html:b}}),Ge&&h&&a.createElement(I,Object.assign({},h,{sizes:"66px",hasContributorImageBackground:f})),Ne&&!le&&"bottom"===Le&&a.createElement(N,{contributors:Ne,bylineVariation:it,isCompact:!1,hasInvertedBylineLink:L}),!pe&&"bottom"===Ae&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},Pe),(Ce||Se)&&dt&&a.createElement(J,{"data-testid":"SplitScreenContentHeaderReleaseYear"},dt),_e&&a.createElement("div",{ref:Ct},a.createElement(ht,{bookmarkTrackingType:"header",link:{label:"Save story",url:"#",network:"bookmark",behavior:"bookmark"},theme:"standard",type:"thin",isUrlBookmark:!0,isBookmarkButton:!0})),!!ut&&!!mt&&a.createElement(W,{averageRatingCount:Math.round(10*ut)/10,brandSlug:t,hasBorderTop:!0,link:et&&{label:bt(l.ratingLinkLabel),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:i}=C(t);null==t||t.focus(),window.scrollTo(0,i-56)},url:"#reviews"},totalRatingCount:mt}),nt?a.createElement(O,null,a.createElement(S,{shareData:{url:ot,title:qe,text:Ve}})):oe(G,me,ue,Ue,ze)),a.createElement(K,{isMusicReview:Ce},a.createElement(c,Object.assign({lede:ct,isCNEVideo:pt},ft)),Ce&&a.createElement(q,null,a.createElement(m,{rating:at,isBestNewMusic:rt,isBestNewReissue:st,isTrackReview:Se})))),"belowHeader"===o&&ae(he,Re),Ne&&le&&a.createElement(N,{contributors:Ne,bylineVariation:V?"Item":Ie,isCompact:!1,isMusicReview:Ce}),lt.length>0&&a.createElement(Z,null,a.createElement(M,null,a.createElement(u,{items:lt,isMusicReview:Ce}))),!de&&Ce&&b&&a.createElement(Z,null,a.createElement(P,{dangerouslySetInnerHTML:{__html:b}})),!nt&&G&&Ue&&a.createElement(X,{align:Be,attributes:{shouldFadeOnMove:!0},anchorBottom:Ke,anchorTop:Ye,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(Q,Object.assign({},Ue,{bookmarkTrackingType:"sticky",className:"social-icons--share"}))))};le.propTypes={artists:o.array,brandSlug:o.string,bylineVariation:o.string,captionPosition:o.oneOf(["belowHeader","belowImage"]),className:o.string,contentAlign:o.oneOf(["center","left"]),contributorImage:o.shape(p.propTypes),contributors:o.shape(h.propTypes.contributors),contributorsPosition:o.oneOf(["top","bottom"]),dangerousDek:o.string,dangerousHed:o.string.isRequired,hasContributorImageBackground:o.bool,hasInvertedBylineLink:o.bool,hasMargin:o.bool,hasNativeShareButton:o.bool,hasStickySocialIcons:o.bool,hideCaption:o.bool,hideContributors:o.bool,hideContributorTitle:o.bool,hideDangerousDek:o.bool,hideIssueDate:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,hideSocialIconsOnMobile:o.bool,imageAlignment:o.oneOf(["center","top","left","right","bottom"]),infoSliceFields:o.object,isInset:o.bool,isMusicReview:o.bool,isSplitScreenArtistLarge:o.bool,issueDate:o.string,issueDatePostfix:o.string,issueLink:o.string,isTextRight:o.bool,isTrackReview:o.bool,lede:o.oneOfType([o.shape(p.propTypes)]),ledeContentAlign:o.oneOf(["left","center"]),musicRating:o.object,persistentAsideAlign:o.oneOf(["left","left-lead-asset"]),publishDate:o.string.isRequired,publishDatePosition:o.oneOf(["top","bottom"]),rating:o.shape(f.propTypes),rubric:o.shape(g.propTypes),rubricVariation:o.string,shouldDisplaySignage:o.bool,shouldEnableNativeShareOnDesktop:o.bool,shouldFitToViewport:o.bool,shouldHeaderFitToViewport:o.bool,showBookmarked:o.bool,showContentDivider:o.bool,showContributorImage:o.bool,showHeaderDivider:o.bool,showReviewLink:o.bool,signage:o.string,socialDescription:o.string,socialIconsToHide:o.array,socialMedia:o.shape(b.propTypes),socialMediaPositionInMobile:o.oneOf(["inLeadWrapperBelowImg","inTitleBlock"]),socialTitle:o.string,stickySocialAnchorBottom:y.propTypes.anchorBottom,stickySocialAnchorTop:y.propTypes.anchorTop,textAlign:o.oneOf(["left","center"]),theme:o.oneOf(["standard","inverted","special"])},le.defaultProps={brandSlug:"",captionPosition:"belowHeader",contentAlign:"center",contributorsPosition:"bottom",hasContributorImageBackground:!1,hasInvertedBylineLink:!1,hasMargin:!1,hasStickySocialIcons:!0,hideCaption:!1,hideContributorTitle:!1,hideContributors:!1,hideDangerousDek:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIconsOnMobile:!1,imageAlignment:"center",isInset:!1,isTextRight:!1,issueDatePostfix:" Issue",ledeContentAlign:"left",musicRating:{score:null},persistentAsideAlign:"left",publishDatePosition:"bottom",shouldEnableNativeShareOnDesktop:!1,shouldFitToViewport:!0,shouldHeaderFitToViewport:!1,showBookmarked:!1,showContentDivider:!1,showContributorImage:!0,showHeaderDivider:!0,showReviewLink:!0,socialIconsToHide:[],socialMediaPositionInMobile:"inTitleBlock",stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='SplitScreenContentHeaderWrapper']",edge:"bottom"},textAlign:"center",theme:"standard"},le.displayName="SplitScreenContentHeader",e.exports=le},1371:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({ratingLinkLabel:{id:"SplitScreenContentHeader.RatingLinkLabel",defaultMessage:"Read Reviews",description:"SplitScreenContentHeader component Rating Link Label"},variousArtists:{id:"SplitScreenContentHeader.VariousArtists",defaultMessage:"Various Artists",description:"SplitScreenContentHeader component various artists text"}})},1372:function(e,t,i){const n=i(0),o=i(1),a=i(78),{SplitScreenContentHeaderLede:r,SplitScreenContentHeaderLedeBlock:s}=i(202),l=({captionCredit:e,className:t,isCNEVideo:i,lede:o,socialMedia:l})=>o?i?o.scriptEmbedUrl?n.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},n.createElement(a,{hasMargins:!1,shouldAutoplay:!0,scriptUrl:o.scriptEmbedUrl})):null:n.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},n.createElement(r,Object.assign({},o)),e,l):null;l.propTypes={captionCredit:o.object,className:o.string,isCNEVideo:o.bool,lede:o.object,socialMedia:o.object},e.exports=l},1373:function(e,t,i){e.exports=i(1374)},1374:function(e,t,i){const n=i(0),{useIntl:o}=i(2),a=i(1),{BestNewMusicArrows:r}=i(1375),s=i(1376).default,l=i(75),{trackComponent:d}=i(5),{BestNewMusicText:c,Rating:p,ScoreBoxWrapper:g,ScoreCircle:u}=i(450),m=i(64),{default:h}=i(1377),y=({rating:e,isBestNewMusic:t,isBestNewReissue:i,palette:a,isTrackReview:y})=>{n.useEffect(()=>{d("ScoreBox")},[]);const{formatMessage:b}=o(),[f,C]=m(),v=y&&t;if(y&&!t)return null;const S=e<10?Number(e).toFixed(1):e,w=t||i,k=t&&i;return n.createElement(l,{palette:a},n.createElement(g,{ref:f},(h.isAccessNegotiationEnabled&&C||!h.isAccessNegotiationEnabled)&&n.createElement(n.Fragment,null,w&&n.createElement(r,{isBestBoth:k,isBest:w}),!v&&n.createElement(u,{isBest:w,isBestBoth:k},n.createElement(p,{isBest:w,isBestBoth:k},S)),w&&n.createElement(c,{isBestBoth:k,isBest:w},!v&&t&&n.createElement("div",null," ",b(s.BestNewMusic)," "),!v&&i&&n.createElement("div",null," ",b(s.BestNewReissue)),v&&n.createElement("div",null," ",b(s.BestNewTrack))))))};y.propTypes={isBestNewMusic:a.bool,isBestNewReissue:a.bool,isTrackReview:a.bool,palette:a.oneOf(["standard","inverted"]),rating:a.number},y.defaultProps={isBestNewMusic:!1,isBestNewReissue:!1,palette:"standard"},e.exports=y},1375:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.BestNewMusicArrows=void 0;const n=i(0),o=i(1),{SvgWrapper:a,SvgStyle:r}=i(450);t.BestNewMusicArrows=e=>n.createElement(a,{theme:e.theme,isBestBoth:e.isBestBoth,isBest:e.isBest},n.createElement(r,{x:"0px",y:"0px",viewBox:"0 0 80 40"},n.createElement("g",null,n.createElement("polyline",{points:"25.4,14.7 33.9,14.7 33.9,39.8 46.3,39.8 46.3,14.7 54.8,14.7 40.1,0 25.4,14.7   "}),n.createElement("polyline",{points:"50.6,40 80,40 65.2,25.4 50.6,40    "}),n.createElement("polyline",{points:"0,40 29.4,40 14.7,25.4 0,40    "})))),t.BestNewMusicArrows.propTypes={isBest:o.bool,isBestBoth:o.bool,theme:o.string}},1376:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({BestNewMusic:{id:"ScoreBox.BestNewMusic",defaultMessage:"Best New Music",description:"Best New Music"},BestNewReissue:{id:"ScoreBox.BestNewReissue",defaultMessage:"Best New Reissue",description:"Best New Reissue"},BestNewTrack:{id:"ScoreBox.BestNewTrack",defaultMessage:"Best New Track",description:"Best New Track"}})},1377:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(456),{APP_ENV:o,AWS_REGION:a,CNE_GRAPHQL_URL:r,CNE_PLAYER_DOMAIN:s,DOMAIN_LOGIN_ENABLED:l,DISABLE_MEMORY_CACHE:d,EPI_WEB_SERVICES_URL:c,LOCAL_USERPLATFORM_URL:p,MARTECH_LIBRARY_URL:g,REDIS_HOSTNAME:u,SECRETS_BACKEND:m,SENTRY_DSN:h,SWG_ENABLED:y,VAULT_TOKEN:b}=Object({ENABLE_LIVE_RELOAD:"false",NODE_ENV:"production"}),f=r||"http://api.cnevids.com/graphql",C=Object({ENABLE_LIVE_RELOAD:"false",NODE_ENV:"production"}).APP_ENV||n.Env.staging;function v(e){return e[C]}const S=s||v({ci:"https://player.cnevids.com",staging:"https://player-backend-qa.cnevids.com",production:"https://player.cnevids.com"}),w=v({production:"a61a3c7a-01d9-4175-8ab8-7171949de605",staging:"0438259f-2d71-419c-b8da-33106659c133",ci:"13f49bf8-68fb-4214-8a01-6bd6b5239540"}),k="true"===y,x="true"===l,$=c||v({ci:"https://origin-stag-services.epicurious.com/api/",staging:"https://origin-stag-services.epicurious.com/api/",production:"https://origin-services.epicurious.com/api/"}),T=v({production:"https://id.condenast.com",staging:"https://staging-id.condenast.com",ci:"https://ci-id.condenast.com"}),E=g||v({ci:"https://stag-martech.condenastdigital.com/lib/martech.js",staging:"https://stag-martech.condenastdigital.com/lib/martech.js",production:"https://martech.condenastdigital.com/lib/martech.js"}),N=v({production:{endpoint:"https://live.content.conde.digital/graphql",region:"us-east-1",authentication_type:"API_KEY",api_key:"da2-mxut7d55nfcetc3tfkdc6d4pna"},staging:{endpoint:"https://live.content-nonprod.conde.digital/graphql",region:"us-east-1",authentication_type:"API_KEY",api_key:"da2-sx7pr6xp3ndn3fgwfbvtr3ajgu"},ci:{endpoint:"",region:"us-east-1",authentication_type:"API_KEY",api_key:""}}),L={accessNegotiationS3Url:"https://access-negotiation.s3.amazonaws.com",awsRegion:a,cneGraphqlUrl:f,cnePlayerBase:S,env:C,epiWebServicesUrl:$,disableMemoryCache:"true"===d,formationOrgAppId:w,isAccessNegotiationEnabled:"production"!==o,isDomainSigninSwitchEnabled:x,isSwgEnabled:k,liveStoriesAppSync:N,martechLibraryUrl:E,oidcProviderConnectionUrl:T,redisHostname:u,secretsBackend:m||"vault",sentryDSN:h,userPlatformLocalHost:p,vaultBasePath:"secret/colab/multi-tenant/"+C,vaultToken:b};t.default=L},1378:function(e,t){const i={genre:"Genre:",label:"Label:",reviewDate:"Reviewed:"};e.exports={formatInfoSliceItems:e=>{if(!e)return[];const t=[];return Object.keys(e).forEach(n=>{e[n]&&e[n].length&&i[n]&&t.push({key:i[n],value:e[n]})}),t}}},1381:function(e,t,i){var n=i(1388),o=i(1449);e.exports=function(e,t,i){return void 0===i&&(i=t,t=void 0),void 0!==i&&(i=(i=o(i))==i?i:0),void 0!==t&&(t=(t=o(t))==t?t:0),n(o(e),t,i)}},1387:function(e,t,i){const{asConfiguredComponent:n}=i(9),{asThemedComponent:o}=i(35),a=i(1349);e.exports=o(n(a,"ContentHeader"))},1388:function(e,t){e.exports=function(e,t,i){return e==e&&(void 0!==i&&(e=e<=i?e:i),void 0!==t&&(e=e>=t?e:t)),e}},1435:function(e,t,i){const{default:n,createGlobalStyle:o,css:a}=i(3),{BREAKPOINTS:r}=i(6),{calculateSpacing:s,getColorStyles:l,getTypographyStyles:d,maxScreen:c,minScreen:p,minMaxScreen:g,getColorToken:u,getLinkStyles:m}=i(4),{withRecircContextProvider:h}=i(174),y=h(i(65)),{getPattern:b}=i(256),f=i(14),{ConfiguredDisclaimer:C}=i(88),{BodyWrapper:v}=i(166),{RecircMostPopularWrapper:S,RecircMostPopularHeading:w}=i(298),{StickyBoxWrapper:k,StickyBoxPrimary:x}=i(461),{IframeEmbedWrapper:$}=i(276),{ResponsiveCartoonWrapper:T}=i(242),{GalleryEmbedHr:E}=i(173),{AssetEmbedAssetContainer:N}=i(85),{GridItem:L,GridWrapper:I}=i(25),B=i(121),{SocialIconsListItem:P}=i(32),{ResponsiveCartoonCaption:A}=i(242),R=a`
  ${({theme:e})=>b(e,"page-background")}
  .grid-layout__content {
    ${p(r.md)} {
      grid-column: 3 / span 8;
    }

    ${p(r.lg)} {
      grid-column: 2 / span 6;
    }

    ${g(r.sm,r.md)} {
      grid-column: 1 / -1;
    }
  }

  .grid-layout--adrail.narrow {
    .container--body-inner {
      ${p(r.md)} {
        grid-column: 1 / -1;
      }
    }

    ${S} {
      &:first-child {
        margin-top: 0;

        ${w} {
          margin-top: 0;
        }
      }
    }
  }

  .container--body {
    grid-gap: 20px;
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,D=n(y).withConfig({displayName:"ArticlePageBase"})`
  &&& {
    ${R}
    ${({shouldHideBaseTopPadding:e})=>e&&"padding-top : 0;"}
    ${({hideNav:e,shouldPrioritizeSeriesPagination:t})=>!t&&(e=>e?`\n    header.site-navigation {\n      margin-top: -13.3rem;\n      transform: translateY(-150%);\n      transition: all 1000ms ease;\n\n      ${g(r.md,r.lg)} {\n        margin-top: -10rem;\n      }\n\n      ${c(r.md)} {\n        margin-top: -7rem;\n      }\n    }\n    `:"\n    header.site-navigation {\n      transition: all 500ms ease;\n    }\n")(e)}
  }
`,M=o`
    .channel--body {
      ${R}
    }
    
    .body__container {
      grid-column: 1/ -1;
    
      ${p(r.md)} {
        grid-column: 3 / span 8;
      }
    }
  
    /* 1. required to enforce proper alignment when text may be less than a full line
       2. remove extra top spacing added by default paragraph margins */
      .article__body {
        margin-bottom: ${s(2)};
        width: 100%; /* 1 */
  
        p:first-child:not(.callout--group-item) {
          margin-top: 0; /* 2 */
        }
  
        .small {
          font-variant: small-caps;
          text-transform: lowercase;
          font-style: normal;
        }
  
        .underline {
          text-decoration: underline;
          font-style: normal;
        }

        ${A} .underline {
          font-style: inherit;
        }
      }
  
      .article__body > .body__inner-container > {
        ${$}, .cne-video-embed {
            &:first-child {
              margin-top: 0;
            }
          }
  
          inline-embed:first-child ${$} {
            margin-top: 0;
          }
      }

      .article__body--grid-margins {
        grid-column: 1 / -1;
      }

      /**
       1. have ad span more columns from the right panel
       to have a larger right margin
       2. have it span 3 which is intended in a 12 column grid
       */
       .grid-layout__aside {
         display: none;
     
         ${p(r.lg)} {
           display: block;
           min-width: 300px;
     
           ${k} {
             top: 90px;
           }
         }
     
         ${S} {
           &:first-child {
             margin-top: 0;
     
             ${w} {
               margin-top: 0;
             }
           }
         }
       }

  `,H=n("div").withConfig({displayName:"PaywallInlineBarrierWithWrapperGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${L} {\n      grid-column: 1 / -1;\n    }`}
`,O=n("div").withConfig({displayName:"ArticlePageLedeBackground"})`
  ${({theme:e})=>b(e,"lede-background")}
`,_=n("div").withConfig({displayName:"ArticlePageContentBackGround"})`
  ${({theme:e})=>b(e,"lede-background")}
  padding-top: ${s(2)};

  @media (min-width: 1208px) {
    padding-top: ${s(4)};
  }

  ${({togglePaddingTop:e})=>"large"===e&&`padding-top: ${s(4)};\n       ${p(r.md)}{ \n        padding-top: ${s(6)};\n       }\n      `}

  ${({togglePaddingTop:e})=>"xlarge"===e&&`${p(r.lg)} {  padding-top: ${s(8)}; }`}
  
    ${({isMobileTruncated:e})=>e&&`\n          position: relative;\n          height: 890px;\n          overflow: hidden;\n  \n          &::before {\n            display: block;\n            position: absolute;\n            bottom: 0;\n            z-index: 1;\n            background: linear-gradient(\n              0deg,\n              rgba(255, 255, 255, 1) 20%,\n              rgba(255, 255, 255, 0) 100%\n            );\n            width: 100%;\n            height: 192px;\n            content: '';\n          }\n  \n          ${p(r.md)} {\n            height: auto;\n            overflow: visible;\n  \n            &::before {\n              display: none;\n            }\n          }\n        `}

  ${({cartoonVariation:e})=>"card"===e&&a`
      ${T}::before, ${T}::after {
        border: none;
      }

      ${T} {
        padding: ${s(2)};
        ${l("background-color","colors.consumption.lead.special.background")};

        ${p(r.lg)} {
          ${P} a {
            width: ${s(5)};
          }
        }
      }
    `}
`,W=n("div").withConfig({displayName:"ArticlePageChunks"})`
  .grid:last-child {
    .body__container > .body__inner-container > *:last-child {
      ${E}:last-child {
        display: none;
      }
    }
  }

  ${({horizontalRuleStyle:e})=>"thin"===e&&"\n        .body__container {\n          .callout--has-top-border {\n            border-top-width: 1px;\n          }\n\n          hr {\n            height: 1px;\n          }\n        }\n      "}

  ${({hasTopSpacing:e})=>!e&&`\n        .inset-embedded-lede {\n          @media (min-width: 0px) and (max-width: calc(${r.md} - 1px)) {\n            ${N} {\n              transform: translateX(-50%);  /* 1 */\n              margin-left: 50%;\n              width: 100vw;\n            }\n          }\n        }\n\n        ${p(r.md)} {\n          .body__container {\n            p:first-of-type {\n              margin-top: 0;\n            }\n\n            .inset-embedded-lede {\n              margin-top: 0;\n            }\n          }\n        }\n    `}

  @media print {
    ${I} {
      display: block;
    }

    ${I} > p {
      font-size: 17px;
    }
  }
`,j=n(f.Utility).withConfig({displayName:"ArticlePageBodyMobileTruncatedBtn"})`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  margin-left: -100px;
  width: 200px;

  ${p(r.md)} {
    display: none;
  }
`,G=n(C).withConfig({displayName:"ArticlePageDisclaimer"})`
  ${d("typography.definitions.discovery.subhed-section-collection")}
  p {
    ${d("typography.definitions.globalEditorial.context-secondary")};
  }
  ${({theme:e})=>l(e,"color","colors.consumption.body.standard.body")};
  ${p(r.md)} {
    .grid-layout--adrail & {
      grid-column: 1 / -1;
    }
  }
`,F=n("div").withConfig({displayName:"ArticlePageChunksContent"})`
  ${({isNarrowContentWell:e})=>e&&`\n        .grid > *:first-child,\n        .body__container {\n          grid-column: 1 / -1;\n\n          ${p(r.lg)} {\n            grid-column: 4 / span 6;\n          }\n        }\n\n        ${T} {\n          .grid--item {\n            grid-column: 1 / -1;\n          }\n        }\n      `}

  ${({shouldBlurText:e})=>{e&&a`
        .grid:first-of-type .body__container p.has-dropcap::first-letter {
          color: transparent;
        }
        ${v} {
          * {
            text-shadow: 0 0 20px
              rgba(
                ${u("colors.consumption.body.standard.body")},
                0.5
              );
            color: transparent;
          }

          a:not(.button) {
            ${({theme:e})=>m(e,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
            text-shadow: 0 0 20px
              rgba(
                ${u("colors.consumption.body.standard.link")},
                0.5
              );
          }
        }
      `}}
`,V=n("article").withConfig({displayName:"ArticlePageMainContent"})`
  ${({shouldBlurText:e})=>e&&"\n        .grid {\n          .body__container {\n            p.has-dropcap,\n            p.has-dropcap__lead-standard-heading {\n              &::first-letter {\n                color: inherit;\n              }\n            }\n          }\n        }\n      "}
`,U=n(B).withConfig({displayName:"ArticlePageSplitAdRail"})`
  ${k},
  ${k} > ${x} {
    height: 100%;
  }

  > aside > ${k} {
    position: static;
  }
`,z=n("div").withConfig({displayName:"ArticlePageSplitAdRailContent"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${k} {
    margin-bottom: 0;
  }

  > div {
    flex: 1;
  }
`,q=n("div").withConfig({displayName:"ArticlePageSplitAdRailTop"})``,K=n("div").withConfig({displayName:"ArticlePageSplitAdRailMiddle"})`
  margin-top: 40px;
`,Y=n("div").withConfig({displayName:"ArticlePageSplitAdRailBottom"})`
  margin-top: 40px;
`,Z=n("div").withConfig({displayName:"ArticlePageBodyGridContainer"})`
  width: 100%;
`,X=n.div.withConfig({displayName:"ArticlePageChunksGrid"})`
  ${({adRail:e})=>!e&&`\n     > ${L} {\n      grid-column: 1/ -1;\n      ${p(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
  > ${L} {
    margin-bottom: ${s(2)};
  }
`,J=n.div.withConfig({displayName:"ArticlePageContentFooterGrid"})`
  ${L} {
    grid-column: 1 / -1;
    ${p(r.md)} {
      grid-column: 3 / span 8;
    }
    ${({isNarrow:e})=>e&&`\n         ${p(r.md)} {\n            grid-column: 4 / span 6;\n          }\n         `}
  }
`,Q=n.div.withConfig({displayName:"ArticlePageDisclaimerGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${L} {\n      grid-column: 1/ -1;\n      ${p(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,ee=n.div.withConfig({displayName:"ContentWrapperGrid"})`
  ${({isadRail:e})=>!e&&`\n    > ${L} {\n      grid-column: 1/ -1;\n      ${p(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`;e.exports={ArticlePageBase:D,ArticlePageGlobalStyle:M,ArticlePageLedeBackground:O,ArticlePageContentBackGround:_,ArticlePageChunks:W,ArticlePageBodyMobileTruncatedBtn:j,ArticlePageChunksContent:F,ArticlePageMainContent:V,ArticlePageDisclaimer:G,ArticlePageSplitAdRail:U,ArticlePageSplitAdRailContent:z,ArticlePageSplitAdRailTop:q,ArticlePageSplitAdRailMiddle:K,ArticlePageSplitAdRailBottom:Y,ArticlePageBodyGridContainer:Z,ArticlePageChunksGrid:X,ArticlePageContentFooterGrid:J,ArticlePageDisclaimerGrid:Q,ContentWrapperGrid:ee,PaywallInlineBarrierWithWrapperGrid:H}},1461:function(e,t,i){const n=i(0),{useIntl:o}=i(2),a=i(7).default;e.exports=e=>{const{formatMessage:t}=o();return n.createElement("svg",Object.assign({},e,{className:"icon icon-star",focusable:"false",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),n.createElement("title",null,t(a.star)),n.createElement("path",{d:"M6 9.09287L2.29173 11L3.02782 7.01113L0 4.20131L4.16334 3.64444L6 0L7.83666 3.64375L12 4.20131L8.97218 7.01113L9.70827 11L6 9.09287Z",fillRule:"evenodd",clipRule:"evenodd",fill:"black"}))}},1462:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({bylineBrandXAdvertiser:{id:"SponsoredContentHeader.BylineBrandXAdvertiser",defaultMessage:"{brandName} X",description:"Byline text when it's a brand and an advertiser"},bylineBrandedContent:{id:"SponsoredContentHeader.BylineBrandedContent",defaultMessage:"Branded Content By",description:"Byline text for branded content"},bylineCreated:{id:"SponsoredContentHeader.BylineCreated",defaultMessage:"Created By {brandName} For",description:"Byline text for created by brand"},bylinePaidPost:{id:"SponsoredContentHeader.BylinePaidPost",defaultMessage:"PAID POST",description:"Byline text for a paid post"},bylineProduced:{id:"SponsoredContentHeader.BylineProduced",defaultMessage:"Produced By",description:"Byline text for produced by"},bylineProducedByAdvertiser:{id:"SponsoredContentHeader.BylineProducedByAdvertiser",defaultMessage:"Produced By",description:"Byline text for produced by advertiser"},bylineProducedByBrand:{id:"SponsoredContentHeader.BylineProducedByBrand",defaultMessage:"Produced By {brandName} With",description:"Byline text for produced by brand"},bylineSponsored:{id:"SponsoredContentHeader.BylineSponsored",defaultMessage:"Sponsored content",description:"Byline text for sponsored content"},bylineSponsoredContent:{id:"SponsoredContentHeader.BylineSponsoredContent",defaultMessage:"Sponsored Content By",description:"Byline text for sponsored content with a sponsor name"},bylineInCollaboration:{id:"SponsoredContentHeader.BylineInCollaboration",defaultMessage:"In Collaboration With",description:"Byline text for in collaboration with"},bylineSponsoredBy:{id:"SponsoredContentHeader.BylineSponsoredBy",defaultMessage:"Sponsored By",description:"Byline text for sponsored by"},bylineInPartnership:{id:"SponsoredContentHeader.BylineInPartnership",defaultMessage:"In Partnership With",description:"Byline text for in partnership with"},bylineAdvertisementFeatureWith:{id:"SponsoredContentHeader.BylineAdvertisementFeatureWith",defaultMessage:"Advertisement Feature With",description:"Byline text for advertisement feature with"},sponsoredLinkCTA:{id:"SponsoredContentHeader.SponsoredLinkCTA",defaultMessage:"Click to go to {sponsorName}'s website",description:"Call to action for sponsored link"}})},1463:function(e,t,i){e.exports=i(1592)},1464:function(e,t,i){const{default:n}=i(3),{calculateSpacing:o,minScreen:a,minMaxScreen:r,getColorToken:s}=i(4),{CarouselControlButton:l}=i(60),d=i(19),{BREAKPOINTS:c}=i(6),p=n(d.EvenFour).withConfig({displayName:"FilterableSummaryListGrid"})`
  &.grid-even.grid-items-4 {
    ${a(c.md)} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &.grid-even {
    ${r(0,c.md)} {
      padding-right: ${o(3)};
      padding-left: ${o(3)};
    }
    padding-right: ${o(4)};
    padding-left: ${o(4)};
  }

  &.grid {
    row-gap: ${o(6)};
  }
`,g=n.section.withConfig({displayName:"FilterableSummaryListWrapper"})`
  ${({theme:e,hasBorderBottom:t})=>t&&`border-bottom: 1px solid ${s(e,"colors.consumption.lead.standard.divider")};`}

  ${({hasPadding:e,hasToggleGridColor:t})=>e&&!t?`padding: ${o(4)} 0 ${o(4)};`:""}
`,u=n.div.withConfig({displayName:"TitleWrapper"})`
  ${({hasTitleMarginTop:e})=>{const t=o(4);return`margin: ${e?t:"0"} 0 ${t} 0;`}}

  ${({hasPadding:e})=>e&&`padding-left: ${o(3)};\n    padding-right:  ${o(3)};\n   `}
  
  ${({hasTitleNoMargin:e})=>e&&"margin: 0;"}
`,m=n.div.withConfig({displayName:"ChipWrapper"})`
  ${({hasToggleGridColor:e})=>e?`padding-bottom: ${o(4)};`:`margin: ${o(4)} 0 0 0;`}
`,h=n.div.withConfig({displayName:"CarouselWrapper"})`
  ${l} {
    margin-top: 1rem;

    &:disabled {
      display: none;
    }
  }
`,y=n.div.withConfig({displayName:"FilterableSummaryListFullBleed"})``;e.exports={FilterableSummaryListFullBleed:y,FilterableSummaryListWrapper:g,TitleWrapper:u,ChipWrapper:m,CarouselWrapper:h,FilterableSummaryListGrid:p}},1512:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1532);e.exports=n(o,"BreadcrumbTrail")},1526:function(e,t,i){e.exports=i(1527)},1527:function(e,t,i){const n=i(1),o=i(0),a=i(48),{useIntl:r}=i(2),s=i(1461),l=i(73),d=i(110),c=i(213),p=i(114),{sizesFullName:g}=i(18),u=i(1528).default,{getIconComponent:m,getComputedRating:h}=i(1529),{trackComponent:y}=i(5),{StackedRatingsCardWrapper:b,ImageWrapper:f,Image:C,Label:v,Link:S,ContentWrapper:w,Content:k,Body:x,Hed:$,Dek:T,MetaData:E,Rating:N,StackedRatingsCardStars:L,StackedRatingsCardImageIcon:I,StackedRatingsCardRubric:B,StackedRatingsCardRubricWrapper:P,StackedRatingsBookmark:A,AuthorNameWrapper:R}=i(1531),D=({analyticsDataAttribute:e,authorName:t,bookmarkId:i,clickHandlerHed:n,clickHandlerRubric:d,contentType:D,iconBookmarkOnClickHandler:M,dangerousHed:H,dangerousDek:O,hasBookmark:_,hasIcon:W,hasRoundedBorder:j,hasRubric:G,hasUnderline:F,hedTag:V,image:U,imageLabels:z,layoutPlacement:q,maxDekLines:K,maxHedLines:Y,rating:Z,rubric:X,ratingMethod:J,ratingPosition:Q,reviewsCount:ee,showAuthorTitle:te,shouldHideDekOnMobileView:ie,shouldHoldImageSpace:ne,url:oe})=>{o.useEffect(()=>{y("StackedRatingsCard")},[]);const{formatMessage:ae}=r(),{xxxLarge:re}=g;if(!oe||!H||a(U))return null;const se=m(D,q),le=e=>{e.stopPropagation(),n&&n(),d&&d()};return o.createElement(b,Object.assign({},e,{ratingPosition:Q}),o.createElement(f,null,o.createElement(S,{href:oe},o.createElement(C,Object.assign({},U,{shouldHoldImageSpace:ne,hasRoundedBorder:j})),z&&z.length?z.map((e,t)=>o.createElement(v,{key:t.toString()},e)):null,W&&se&&o.createElement(I,{ButtonIcon:se,inputKind:"text",isIconButton:!0,label:"icon"}))),o.createElement(w,{hasUnderline:F,hasRubric:G,ratingPosition:Q},o.createElement(k,null,G&&o.createElement(P,{onClick:le},o.createElement(B,{name:X.name,url:X.url})),o.createElement(x,null,o.createElement(l,{lines:Y,breakpoint:re},o.createElement(S,{href:oe,onClick:le},o.createElement($,{as:V,dangerouslySetInnerHTML:{__html:H},dek:O}))),O&&o.createElement(l,{lines:K,breakpoint:re},o.createElement(T,{dangerouslySetInnerHTML:{__html:O},hed:H,shouldHideDekOnMobileView:ie})))),te||!Z&&!_?null:o.createElement(E,null,Z?"starRating"===J?o.createElement(L,{averageRatingCount:h(Z),hasBorderTop:!1,totalRatingCount:Z}):ee>0&&o.createElement(o.Fragment,null,o.createElement(s,null),o.createElement(N,null,Z," (",ee,")")):null,_&&o.createElement(A,{hasEnableIcon:!0,isIconButton:!0,iconPosition:"before",ButtonIcon:i?p:c,label:ae(i?u.bookmarkButtonLabelSaved:u.bookmarkButtonLabelBookmark),onClickHandler:M})),te&&t&&o.createElement(R,null,t)))};D.propTypes={analyticsDataAttribute:n.object,authorName:n.string,bookmarkId:n.string,clickHandlerHed:n.func,clickHandlerRubric:n.func,contentType:n.string,dangerousDek:n.string,dangerousHed:n.string.isRequired,hasBookmark:n.bool,hasIcon:n.bool,hasRoundedBorder:n.bool,hasRubric:n.bool,hasUnderline:n.bool,hedTag:n.string,iconBookmarkOnClickHandler:n.func,image:n.shape(d.propTypes),imageLabels:n.arrayOf(n.string),layoutPlacement:n.string,maxDekLines:n.number,maxHedLines:n.number,rating:n.number,ratingMethod:n.string,ratingPosition:n.oneOf(["default","bottom"]),reviewsCount:n.number,rubric:n.shape({name:n.string,url:n.string}),shouldHideDekOnMobileView:n.bool,shouldHoldImageSpace:n.bool,showAuthorTitle:n.bool,url:n.string.isRequired},D.defaultProps={hasRoundedBorder:!0,hedTag:"h3",maxDekLines:2,maxHedLines:2,ratingPosition:"default",shouldHideDekOnMobileView:!1,shouldHoldImageSpace:!0,showAuthorTitle:!1},e.exports=D},1528:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({bookmarkButtonLabelSaved:{id:"BookmarkButton.LabelSaved",defaultMessage:"recipe saved",description:"Bookmark saved button"},bookmarkButtonLabelBookmark:{id:"BookmarkButton.Label",defaultMessage:"save recipe",description:"Bookmark button label"}})},1529:function(e,t,i){const{ICON_EXCLUSIONS:n,SUPPORTED_ICONS:o}=i(1530);e.exports={getIconComponent:(e,t)=>-1===n.indexOf(t)&&o[e]?o[e]:null,getComputedRating:e=>{const t=Math.round(10*e)/10,i=function(e){if(Number.isInteger(e))return 0;const t=e.toString().split(".")[1];return Number(t)}(t);return i<3?Math.floor(t):i<8?t:Math.round(t)}}},1530:function(e,t,i){const n=i(169),o=i(128),a={gallery:n,video:o,cnevideo:o};e.exports={ICON_EXCLUSIONS:["side-by-side"],SUPPORTED_ICONS:a}},1531:function(e,t,i){const n=i(3).default,{BREAKPOINTS:o}=i(6),{BaseLink:a,BaseText:r}=i(10),{maxScreen:s,minScreen:l,calculateSpacing:d,getColorStyles:c,getColorToken:p,getDecoration:g}=i(4),u=i(110),m=i(101),{RatingRating:h,RatingRatings:y,RatingStar:b}=i(466),{InlineVideoItemIconButton:f}=i(170),C=i(253),{SocialIconContainer:v,SocialIconButton:S}=i(32),w=n.div.withConfig({displayName:"StackedRatingsCardWrapper"})`
  ${({ratingPosition:e})=>"bottom"===e&&"height: 100%;\n     display: flex;\n     flex-direction: column;"}
`,k=n(a).withConfig({displayName:"Link"})``;k.defaultProps={colorToken:"colors.discovery.body.white.heading",linkStyle:"global"};const x=n.div.withConfig({displayName:"ImageWrapper"})`
  position: relative;
`,$=n(u).withConfig({displayName:"Image"})`
  img {
    ${({theme:e,hasRoundedBorder:t})=>t&&"border-radius: "+g(e,"cardRadiusSm")};

    ${l(o.md)} {
      ${({theme:e,hasRoundedBorder:t})=>t&&"border-radius: "+g(e,"cardRadiusMd")};
    }

    ${l(o.lg)} {
      ${({theme:e,hasRoundedBorder:t})=>t&&"border-radius: "+g(e,"cardRadiusMd")};
    }
  }
`,T=n(r).withConfig({displayName:"Label"})`
  position: absolute;
  top: ${d(1)};
  left: ${d(1)};
  margin: 0 ${d(1)} 0 0;
  border-radius: ${d(3)};
  padding: ${d(.5)} ${d(1)};

  ${({theme:e})=>c(e,"background","colors.discovery.body.brand.background")};

  ${l(o.md)} {
    padding: ${d(1)} ${d(2)};
  }

  ${l(o.lg)} {
    top: ${d(2)};
    left: ${d(2)};
  }
`;T.defaultProps={as:"div",colorToken:"colors.discovery.body.brand.heading",typeIdentity:"typography.definitions.globalEditorial.tags"};const E=n.div.withConfig({displayName:"ContentWrapper"})`
  ${({ratingPosition:e})=>"bottom"===e&&"flex-grow: 1;\n     display: flex;\n     flex-direction: column;\n     justify-content: space-between;"}

  border-radius: ${({theme:e})=>g(e,"cardRadiusSm")};
  padding: ${d(2)} ${d(.5)}
    ${d(1)};

  ${l(o.md)} {
    border-radius: ${({theme:e})=>g(e,"cardRadiusMd")};
    padding: ${d(3)} ${d(1)}
      ${d(1)};
  }

  ${l(o.lg)} {
    border-radius: ${({theme:e})=>g(e,"cardRadiusLg")};
  }

  ${({hasUnderline:e,theme:t})=>e&&`\n    border-bottom: 1px solid;\n    border-bottom-color: ${p(t,"colors.interactive.base.light")};\n    `};

  ${({hasRubric:e})=>e&&`\n    padding-top: ${d(.5)};\n    ${l(o.md)} {\n      padding-top: ${d(1)};\n    }\n  `};
`,N=n.div.withConfig({displayName:"Content"})`
  padding: 0 0 ${d(2)};
`,L=n.div.withConfig({displayName:"Body"})``,I=n(r).withConfig({displayName:"Hed"})`
  ${s(o.md)} {
    display: inline;
  }
  ${({dek:e})=>!e&&"margin: 0 0 "+d(1)}
`;I.defaultProps={as:"h3",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.hed-core-secondary"};const B=n(r).withConfig({displayName:"Dek"})`
  ${({shouldHideDekOnMobileView:e})=>e&&`\n  display: none;\n\n  ${l(o.md)} {\n    display: block;\n  }\n  `}
  margin: ${d(1)} 0 0;
`;B.defaultProps={as:"div",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.discovery.description-core"};const P=n.div.withConfig({displayName:"MetaData"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${d(4)};
  ${v} {
    height: ${d(2.2)};
  }

  ${S} {
    display: flex;
    margin-left: auto;
    border: 0;
    background: none;
    padding: 0;
    width: ${d(2.5)};
    list-style: none;

    .icon-bookmark.icon {
      height: ${d(2.5)};
    }
  }
`,A=n(r).withConfig({displayName:"AuthorNameWrapper"})`
  padding-top: 6px;
`;A.defaultProps={colorToken:"discovery.body.white.heading",typeIdentity:"typography.definitions.globalEditorial.accreditation-core"};const R=n(r).withConfig({displayName:"Rating"})`
  margin: 0 ${d(1)};
`;R.defaultProps={as:"div",colorToken:"colors.discovery.body.white.accreditation",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const D=n(m).withConfig({displayName:"StackedRatingsCardStars"})`
  align-items: flex-start;
  margin-left: -${d(.9)};
  padding: 0;

  ${h}, ${y} {
    display: none;
  }

  ${b} {
    width: ${d(2.1)};
  }
`,M=n(f).withConfig({displayName:"StackedRatingsCardImageIcon"})`
  width: ${d(4)};
  height: ${d(4)};
`,H=n.div.withConfig({displayName:"StackedRatingsCardRubricWrapper"})``,O=n(C.DiscoveryItem).withConfig({displayName:"StackedRatingsCardRubric"})``,_=n(S).withConfig({displayName:"StackedRatingsBookmark"})``;e.exports={AuthorNameWrapper:A,StackedRatingsCardWrapper:w,ImageWrapper:x,Image:$,Label:T,Link:k,ContentWrapper:E,Content:N,Body:L,Hed:I,Dek:B,MetaData:P,Rating:R,StackedRatingsCardStars:D,StackedRatingsCardImageIcon:M,StackedRatingsCardRubric:O,StackedRatingsCardRubricWrapper:H,StackedRatingsBookmark:_}},1532:function(e,t,i){const n=i(1),o=i(0),a=i(75),r=i(19),{getSeparatorIconComponent:s}=i(1533),{BreadcrumbTrailWrapper:l,BreadcrumbTrailScrollContainer:d,BreadcrumbTrailItem:c}=i(1536),{trackComponent:p}=i(5),g=({hierarchy:e,shouldRemoveBackgroundColor:t,theme:i,shouldUseContentHeaderColorForLink:n,separatorIcon:g})=>(o.useEffect(()=>{p("BreadcrumbTrail")},[]),o.createElement(a,{palette:i},o.createElement(l,{"data-testid":"BreadcrumbTrail",shouldRemoveBackgroundColor:t},e&&e.length>0&&o.createElement(r.WithMargins,null,o.createElement(d,null,e.map((e,t)=>{const{name:i,slug:a}=e||{};return o.createElement(c,{key:t,shouldUseContentHeaderColorForLink:n},a?o.createElement("a",{className:"breadCrumbLink",href:a},i):o.createElement("span",null,i),s(g))}))))));g.displayName="BreadcrumbTrail",g.defaultProps={separatorIcon:{name:"Chevron",type:"standard"},shouldRemoveBackgroundColor:!1,theme:"standard"},g.propTypes={hierarchy:n.array.isRequired,separatorIcon:n.shape({name:n.string,type:n.oneOf(["standard","thin","thinner"])}),shouldRemoveBackgroundColor:n.bool,shouldUseContentHeaderColorForLink:n.bool,theme:n.string},e.exports=g},1533:function(e,t,i){const n=i(0),{getIconComponent:o}=i(1534);e.exports={getSeparatorIconComponent:e=>{const{name:t,type:i}=e,a=o(t,i)||o("Chevron","standard");return n.createElement(a,Object.assign({},{width:"1rem",height:"1rem"}))}}},1534:function(e,t,i){const n={standard:i(145),thin:i(482),thinner:i(1535)};e.exports={getIconComponent:(e,t="standard")=>{if(!e)return null;const i=n[t][e];return i||null}}},1535:function(e,t,i){e.exports={Bookmark:i(213),BookmarkActivated:i(114),Email:i(477),Facebook:i(478),Twitter:i(480),Print:i(481),Shopping:i(479)}},1536:function(e,t,i){const{default:n}=i(3),{BaseText:o}=i(10),{calculateSpacing:a,getLinkStyles:r,getColorStyles:s}=i(4),{BREAKPOINTS:l}=i(6),{isInverted:d}=i(31),c=n.div.withConfig({displayName:"BreadcrumbTrailWrapper"})`
  ${({theme:e,shouldRemoveBackgroundColor:t})=>{const i=d(e)?"colors.background.black":"colors.background.light";return t?"background-color: transparent;":s(e,"background-color",i)+";"}};

  padding-top: ${a(2.4)};
  padding-bottom: ${a(2.4)};
  width: 100%;

  @media (max-width: ${l.md}) {
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,p=n.div.withConfig({displayName:"BreadcrumbTrailScrollContainer"})`
  display: flex;
  width: max-content;
`,g=n(o).withConfig({displayName:"BreadcrumbTrailItem"})`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  ${({theme:e})=>d(e)&&`\n      ${s(e,"color","colors.consumption.lead.inverted.link")};`}

  a:active,
  a:link {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  .icon {
    margin: 0 ${a(.2)};

    path {
      ${({theme:e})=>d(e)&&`\n          ${s(e,"fill","colors.consumption.lead.inverted.link")};\n        `}
    }
  }

  &:last-of-type {
    a {
      ${({theme:e,shouldUseContentHeaderColorForLink:t})=>{const i=d(e)?r(e,"colors.consumption.lead.inverted.link",null):r(e,"colors.discovery.lead.secondary.link",null);return t?r(e,"colors.consumption.lead.standard.context-signature",null):i}}

      &:active,
      &:link {
        text-decoration: none;
      }

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    span {
      ${({theme:e})=>s(e,"color","colors.discovery.lead.secondary.link")};
    }

    .icon {
      display: none;
    }
  }
`;g.defaultProps={typeIdentity:"typography.definitions.globalEditorial.tags"},e.exports={BreadcrumbTrailWrapper:c,BreadcrumbTrailScrollContainer:p,BreadcrumbTrailItem:g}},1537:function(e,t,i){e.exports=i(1538)},1538:function(e,t,i){const n=i(1),o=i(0),{connect:a}=i(23),{useIntl:r}=i(2),s=i(1539).default,l=i(29).default,d=i(30),c=i(11),{googleAnalytics:p}=i(12),{asConfiguredComponent:g}=i(9),{doCloseModal:u}=i(165),{trackComponent:m}=i(5),{SignInModalBaseWrapper:h,SignInModalCloseButton:y,SignInModalButtons:b,SignInModalDek:f,SignInModalHed:C,SignInModalEmail:v,SignInModalSignInSection:S,SignInModalSpotIllustration:w,SignInModalSignInLink:k,SignInModalHedSpanTag:x}=i(1540),$=({analyticsType:e,authSource:t,brandIdentityAssets:i,className:n,closeButtonCallback:a,dangerousDek:g,dangerousHed:$,dangerousHedSpanTag:T,hasLargeMargins:E,hasRoundedCornersButtons:N,isVisible:L,redirectURL:I,source:B,type:P})=>{o.useEffect(()=>{m("SignInModal")},[]);const A=t=>p.emitGoogleTrackingEvent(t,{signInModalType:e});L&&A("signin-modal-impression");let R=`${l.oidcAuth}?redirectURL=${encodeURIComponent(I)}&skipAccountLink=true&authSource=${t}`;B&&(R=`${R}&source=${B}`);const D=i.signInModalAsset[P]||i.signInModalAsset.default,{formatMessage:M}=r();return o.createElement(h,{className:n,hasLargeMargins:E,closeTimeoutMS:400,isOpen:L},o.createElement(y,{isIconButton:!0,ariaLabel:M(s.closeButtonAriaLabel),label:M(s.closeButtonLabel),onClickHandler:()=>{u(),A("signin-modal-close"),a&&a()},role:"button",ButtonIcon:d}),o.createElement(C,null,$||M(s.hed),o.createElement(x,null,T||M(s.hedSpanTag))),o.createElement(w,null,o.createElement(c,Object.assign({},D))),o.createElement(f,{dangerouslySetInnerHTML:{__html:g}}),o.createElement(b,{hasRoundedCornersButtons:N},o.createElement(v,{label:M(s.oidcSignUpButtonLabel),href:R,inputKind:"link",rel:"link",iconPosition:"before",onClickHandler:()=>A("signin-modal-oidc-sign-in-click"),"data-testid":"SignInModalEmail"})),o.createElement(S,null,M(s.oidcSignInText)," ",o.createElement(k,{href:R,onClick:()=>A("signin-modal-oidc-sign-in-click")},M(s.oidcSignInLinkText)),"voting"===P&&o.createElement("div",null,"  »")))};$.displayName="SignInModal",$.defaultProps={authSource:"sign-in-modal",hasLargeMargins:!1,redirectURL:"/",type:"default"},$.propTypes={analyticsType:n.string.isRequired,authSource:n.string,brandIdentityAssets:n.shape({signInModalAsset:n.shape({default:n.object,crosswords:n.object,voting:n.object})}).isRequired,className:n.string,closeButtonCallback:n.func,dangerousDek:n.string,dangerousHed:n.string,dangerousHedSpanTag:n.string,hasLargeMargins:n.bool,hasRoundedCornersButtons:n.bool,isVisible:n.bool,redirectURL:n.string,source:n.string,type:n.oneOf(["default","crosswords","voting"])};const T=g($,"SignInModal");e.exports=a(e=>{const{signInModalConfig:t,brandIdentityAssets:i}=e;return Object.assign({brandIdentityAssets:i},t)})(T)},1539:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({oidcSignUpButtonLabel:{id:"SignInModal.OidcSignUpButtonLabel",defaultMessage:"Create account",description:"SignInModal component OIDC SignUp button label"},closeButtonLabel:{id:"SignInModal.CloseButtonLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button label"},closeButtonAriaLabel:{id:"SignInModal.CloseButtonAriaLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button aria label"},hed:{id:"SignInModal.Hed",defaultMessage:"Save stories ",description:"SignInModal component hed text",isConfigurable:!0},hedSpanTag:{id:"SignInModal.HedSpanTag",defaultMessage:"with an account",description:"SignInModal component hed spanTag text",isConfigurable:!0},oidcSignInText:{id:"SignInModal.OidcSignInText",defaultMessage:"Already have an account?",description:"SignInModal component OIDC SignIn Text"},oidcSignInLinkText:{id:"SignInModal.OidcSignInLinkText",defaultMessage:"Sign in",description:"SignInModal component OIDC SignIn Link Text"}})},1540:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(0),a=i(163),r=i(1),{default:s,css:l}=i(3),{BaseText:d,BaseLink:c}=i(10),{calculateSpacing:p}=i(4),{BREAKPOINTS:g,ZINDEX_MAP:u}=i(6),m=i(14),{getColorToken:h,getTypographyStyles:y}=i(4),{ResponsiveImagePicture:b}=i(27),{ButtonWrapper:f}=i(43),C=s(d).withConfig({displayName:"SignInModalHed"})`
  text-align: center;
`;C.defaultProps={as:"div",colorToken:"colors.discover.body.white.heading",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-small"};const v=s.span.withConfig({displayName:"SignInModalHedSpanTag"})`
  display: block;
`,S=s.p.withConfig({displayName:"SignInModalDek"})`
  ${y("typography.definitions.consumptionEditorial.body-core")}
  text-align: center;
  color: ${h("colors.discover.body.white.description")};
  @media (max-width: ${g.md}) {
    margin-bottom: ${p(3)};
  }
`,w=s(d).withConfig({displayName:"SignInModalSpotIllustration"})`
  margin: ${p(1.5)} auto;
  text-align: center;

  ${b} {
    width: 200px;
    height: 170px;
  }
`;w.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const k=s(m.Primary).withConfig({displayName:"SignInModalButtonPrimary"})`
  margin-bottom: ${p(1)};
  width: 100%;
`,x=s(m.Primary).withConfig({displayName:"SignInModalButtonPrimaryOutlined"})`
  width: 100%;
`,$=s(m.Utility).withConfig({displayName:"SignInModalCloseButton"})`
  position: absolute;
  top: ${p(1)};
  right: ${p(1)};
  padding: 0;
  fill: ${h("colors.discovery.body.light.context-tertiary")};

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,T=s(m.Utility).withConfig({displayName:"SignInModalEmail"})`
  margin-top: 0;
  padding: 0;
`,E=s.div.withConfig({displayName:"SignInModalButtons"})`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: ${p(2)};
  width: 100%;

  ${T} {
    padding: 0;
    width: 100%;
  }

  ${({hasRoundedCornersButtons:e})=>e&&`\n    ${f} {\n      border-radius: 4px;\n    }\n  `}
`,N=l`
  &&& {
    padding: ${p(8)} ${p(5)};
    min-height: ${p(62)};
  }
  ${w} {
    margin: ${p(1.5)} auto;

    ${b} {
      width: 175px;
      height: 175px;
    }
  }

  ${S} {
    margin-bottom: ${p(2)};
  }

  ${E} {
    margin-bottom: ${p(4)};

    @media (max-width: ${g.md}) {
      padding-bottom: 0;
    }
  }
`;function L(e){var{className:t}=e,i=n(e,["className"]);const r=t+"__content",s=t+"__overlay";return o.createElement(a,Object.assign({portalClassName:t,className:r,overlayClassName:s},i))}L.propTypes={className:r.string};const I=s(L).withConfig({displayName:"SignInModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${u.interstitialLayer};

    background-color: rgba(
      ${h("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      opacity: 1;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 750ms;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${h("colors.background.white")};
    padding: ${p(5)};
    width: ${p(60)};
    max-height: calc(100% - ${p(1,"px")});
    overflow-y: auto;

    @media (max-width: ${g.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${p(2,"px")}));

      margin: 0 ${p(2,"px")};
      padding: ${p(4)} ${p(5)}
        ${p(4)} ${p(5)};
      width: auto;
      min-width: ${p(38)};
      max-width: ${p(60)};
    }

    ${k}
    ${x}
    ${({hasLargeMargins:e})=>!0===e&&N}
  }
`,B=s(d).withConfig({displayName:"SignInModalSignInSection"})`
  display: flex;
  justify-content: center;
  width: 100%;
`;B.defaultProps={as:"div",colorToken:"colors.discovery.body.light.context-tertiary",typeIdentity:"typography.definitions.utility.assistive-text"};const P=s(c).withConfig({displayName:"SignInModalSignInLink"})`
  && {
    z-index: ${u.interstitialLayer};
    margin-left: 5px;
    text-decoration: underline;
  }
`;P.defaultProps={colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.assistive-text"},e.exports={SignInModalBaseWrapper:I,SignInModalCloseButton:$,SignInModalButtons:E,SignInModalDek:S,SignInModalEmail:T,SignInModalHed:C,SignInModalSignInSection:B,SignInModalSignInLink:P,SignInModalSpotIllustration:w,SignInModalHedSpanTag:v}},1541:function(e,t,i){const{default:n,css:o}=i(3),{BREAKPOINTS:a}=i(6),{applyGridSpacing:r,cssVariablesGrid:s}=i(16),{calculateSpacing:l,minScreen:d,maxScreen:c,minMaxScreen:p,getColorToken:g,getTypographyStyles:u}=i(4),m=i(14),{universalGridCore:h}=i(56),y=i(58),{RowWrapper:b}=i(486),f=i(19),{GridItem:C}=i(25),v=i(485),{SummaryRiverSection:S}=i(491),{SummaryCollageOneGridWithMargin:w}=i(1567),{SectionTitleHed:k}=i(91),x=`\n  ${s()}\n  ${r("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${a.xxl};\n`,$=n(y).withConfig({displayName:"MultiPackageBaseRow"})`
  &:first-child,
  & ~ & {
    ${({hasMarginTopMultiPackageRow:e})=>e?"":"margin-top: 0;"}
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,T=n(m.Utility).withConfig({displayName:"MultiPackageRow"})`
  &&& {
    align-items: center;
    width: auto;
  }
`,E=n($).withConfig({displayName:"MultiPackageRow"})`
  ${({hasNoTopMargin:e})=>e?"":`margin-top: ${l(7)};`}

  ${({hasPlpFilterableContainerLightBackgroundColor:e,theme:t})=>e?`background-color: ${g(t,"colors.discovery.body.light.background")};`:""}

  ${({hasMediumMargin:e,hasNoBottomMargin:t,hasReducedMargin:i,isNativeAd:n})=>e?`margin-bottom: ${l(4)};`:t||n&&i?"margin-bottom: 0;":i?`margin-bottom: ${l(2)};`:`margin-bottom: ${l(7)};`}

  ${({hasMarginBottomMultiPackageRow:e})=>e?`\n          ${d(a.lg)} {\n            margin-bottom: ${l(5)};\n          }\n          ${p(a.md,a.lg)} {\n            margin-bottom: ${l(4)};\n          }\n          ${p(0,a.md)} {\n            margin-bottom: ${l(3)};\n          }`:""}

  /* TODO: this should be a configuration for a layout
     Specificity is required due to star selector in homepage  */
  ${d(a.lg)} {
    ${b}.homepage__half-column-row + && {
      width: 50%;
      max-width: 800px;
      ${k} {
        ${u("typography.definitions.discovery.subhed-section-secondary")};
      }
    }
    .homepage__half-column-row + && > ${w} {
      padding-left: var(--grid-gap);
    }
    ${S} {
      margin: 0 auto;
      max-width: 1600px;
    }
  }
`,N=n(f.WithMargins).withConfig({displayName:"DiscoveryQuoteRow"})`
  ${C} {
    grid-column: 1/-1;

    ${d(a.md)} {
      grid-column: 3/11;
    }
  }
`,L=n(v).withConfig({displayName:"MultiPackageBody"})`
  ${({constrainPagragraph:e})=>e&&`\n    inline-embed{\n      display: block;\n      p {\n        display:inline-block;\n        max-width: ${l(40.875)};\n        ${d(a.lg)} {\n          max-width: ${l(91.5)};\n        }\n      }\n    }\n  `}
`,I=o`
  &.puzzles-games-landing-page {
    .ticker-wrapper {
      margin-bottom: 0;
    }

    .ticker-view > div:nth-child(2) {
      margin-top: ${l(4)};
    }

    .summary-collage-six-puzzles-games .summary-item:first-child h3 {
      ${u("typography.definitions.discovery.description-core")};
      font-size: ${l(4)};
    }

    .verso-features {
      margin-bottom: ${l(4)};
    }

    > div:nth-child(3)
      .summary-collage-six-puzzles-games
      .summary-list--collection-list {
      ${c(a.lg)} {
        padding-top: 0;
      }
    }

    .summary-river-puzzles-games {
      h2 {
        font-size: 24px;
      }

      & > section {
        .summary-item:last-child {
          border-bottom: 0;
        }

        > div {
          margin-bottom: ${l(2)};

          > div:first-child {
            margin-bottom: 0;
          }
        }
      }

      .summary-item {
        padding-top: ${l(2)};
      }
    }

    .summary-item--is-dense .summary-item__asset-container {
      ${p(0,a.xl)} {
        display: block;
      }

      ${d(a.xl)} {
        float: none;
        margin-left: 0;
      }
    }

    .summary-list--collection-list {
      ${p(0,a.lg)} {
        border-top: 0;
        padding-top: 0;
      }
    }

    .summary-list__items .summary-item:not(:first-child) {
      margin-bottom: 0;
      padding-bottom: ${l(2)};
    }

    .summary-list__items .summary-item:first-child {
      ${p(0,a.lg)} {
        padding-bottom: ${l(2)};
      }

      ${d(a.lg)} {
        padding-bottom: 0;
      }
    }

    .summary-collage-six-puzzles-games .summary-item h3 {
      ${u("typography.definitions.discovery.hed-core-secondary")};
    }

    .summary-collage-six-puzzles-games h2,
    .summary-collection-grid h2 {
      ${u("typography.definitions.discovery.subhed-section-primary")};
    }

    .verso-embed-row inline-embed h1 {
      margin: 0;
      font-size: ${l(5.5)};
    }

    .verso-embed-row {
      margin: ${l(4)} 0;
    }

    ${L} {
      max-width: initial;
    }

    .verso-features h2 {
      font-size: 24px;
    }

    .summary-collage-six-puzzles-games h2 {
      font-size: 20px;
    }

    .summary-item__dek > a {
      ${u("typography.definitions.foundation.link-primary")};
      display: block;
      padding-top: ${l(2.5)};
      text-decoration: none;
      color: ${g("colors.interactive.base.brand-primary")};
    }

    .summary-item__dek > a:hover {
      text-decoration: underline;
    }
  }
`,B=n.div.withConfig({displayName:"MultiPackageContainer"})`
  ${({showFooterAdPadding:e})=>e&&`padding-bottom: ${l(10,"px")};`}

  ${({customClass:e})=>e&&"puzzles-games-landing-page"===e&&I}
  ${({hasMarginBottomMultiPackageRow:e})=>e?"\n            .verso-features {\n              && {\n                margin-bottom: 0;\n              }\n            }\n          ":""}
`,P=n.div.withConfig({displayName:"SectionJumpLinksWrapper"})`
  ${({theme:e})=>(e=>`\n    background: ${g(e,"colors.consumption.body.inverted.display-texture")};\n    ${d(a.md)} {\n      width: ${a.md};\n      padding: ${l(3)} ${l(9)} ${l(5)} ${l(9)};\n    }\n    padding: ${l(2)} ${l(5)} ${l(3.5)} ${l(5)};\n    margin: auto;\n    div {\n      div {\n        h1 {\n          text-align: center;\n        }\n        div {\n          a {\n            font-family: Konnect, helvetica, sans-serif;\n            font-style: normal;\n            line-height: ${l(2.4,"rem")};\n            font-size: ${l(2)};\n            &:not(.button):link,\n            &:not(.button):visited {\n              color: rgb(0, 0, 0);\n            }\n          }\n          display: grid;\n          ${d(a.md)} {\n            grid-template-columns: 1fr 1fr 1fr;\n            grid-row-gap: ${l(1.5)};\n          }\n          grid-template-columns: 1fr 1fr;\n          grid-row-gap: ${l(1)};\n        }\n      }\n    }\n  }\n  `)(e)}
`,A=n(E).withConfig({displayName:"MultiPackageReadMore"})`
  display: flex;
  justify-content: center;
`,R=n.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${x}
`,D=n.div.withConfig({displayName:"EventsListWrapper"})`
  ${s()}

  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};

  ${d(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,M=n.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${x}
`,H=n.div.withConfig({displayName:"NewsletterWrapper"})`
  ${x}

  padding-top: ${l(6)};
  padding-bottom: ${l(6)};

  ${d(a.md)} {
    padding-top: ${l(9)};
    padding-bottom: ${l(9)};
  }
`,O=n.div.withConfig({displayName:"CMUnitWrapper"})`
  ${x}

  ${d(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,_=n.div.withConfig({displayName:"SubTopicDiscoveryWrapper"})`
  ${h(!0)}
  ${r("padding")}

  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};

  ${d(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,W=n(f).withConfig({displayName:"GridWrapper"})`
  ${x}
`,j=n.div.withConfig({displayName:"EmbedWrapper"})`
  ${x}
`,G=n.div.withConfig({displayName:"TickerWrapper"})`
  ${x}
`,F=n("div").withConfig({displayName:"MultipackageNoItemsBlock"})`
  ${s()}
  ${r("padding")}
  margin: 0 auto;
  margin-bottom: ${l(4)};
  width: 100%;
  max-width: ${a.xxl};
  color: white;
  font-family: 'LabGrotesque';
  ${({hasRule:e,theme:t})=>e?`\n        &::before {\n          border-top: 1px solid ${g(t,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${l(4)};\n          display: block;\n        }\n      `:""}

  h3 {
    margin: 0 auto;
    width: fit-content;
    ${u("typography.definitions.consumptionEditorial.subhed-break-secondary")}
  }

  p {
    font-family: Proxima Nova;
    font-size: 12px;
  }
`,V=n.div.withConfig({displayName:"MultiPackageBodyWrapperGrid"})`
  ${h()}
  ${r("padding")}
`;e.exports={CMUnitWrapper:O,DiscoveryQuoteRow:N,EmbedWrapper:j,GridWrapper:W,EventsListWrapper:D,MultiPackageContainer:B,MultiPackageRow:E,MultiPackageBody:L,MultiPackageReadMore:A,NewsFeedWrapper:M,NewsletterWrapper:H,PromoBoxWrapper:R,SubTopicDiscoveryWrapper:_,TickerWrapper:G,MultipackageNoItemsBlock:F,MultiPackageBodyWrapperGrid:V,SectionJumpLinksWrapper:P,UtilityButton:T}},1567:function(e,t,i){const{default:n,css:o}=i(3),{BREAKPOINTS:a}=i(6),{applyGridSpacing:r,cssVariablesGrid:s}=i(16),{RubricLink:l}=i(80),{calculateSpacing:d,minScreen:c,minMaxScreen:p,getTypographyStyles:g,getColorToken:u}=i(4),{BaseLink:m}=i(10),{SocialIconsList:h}=i(32),{SpanWrapper:y}=i(84),b=n.div.withConfig({displayName:"SummaryCollageOneTitle"})`
  grid-column: 1 / -1;

  ${({isSingleFeature:e})=>!e&&`\n      margin-bottom: ${d(2)};\n\n      ${c(a.md)} {\n        margin-bottom: ${d(1)};\n      }\n\n      ${c(a.lg)} {\n        margin-bottom: ${d(0)};\n      }\n    `}
`,f=n.div.withConfig({displayName:"SummaryCollageOneCtaLink"})`
  grid-column: 1 / -1;
  text-align: center;

  span {
    display: block;
    width: 100%;
    text-align: center;
  }
`,C=n(m).withConfig({displayName:"SummaryCollageOneAnchorLink"})`
  ${g("typography.definitions.foundation.link-primary")}
  display: inline-block;
  margin-bottom: ${d(2)};
  vertical-align: top;
  ${c(a.lg)} {
    margin-bottom: ${d(4)};
  }
`;C.defaultProps={colorSecondaryLinkToken:"colors.interactive.base.dark",colorStaticLinkToken:"colors.interactive.base.brand-primary",linkStyle:"global"};const v=o`
  ${s()}
  ${r("padding")}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};
  row-gap: var(--grid-gap);

  .summary-item--layout-placement-text-below {
    &.summary-item--text-align-left,
    &.summary-item--text-align-center {
      .summary-item__hed {
        ${g("typography.definitions.discovery.hed-break-out")};
      }

      .summary-item__dek {
        ${g("typography.definitions.discovery.description-feature")};
      }
    }
  }

  .summary-item__hed-link {
    &::after {
      border-bottom: 1px solid
        ${u("colors.discovery.body.white.accent")};
    }
  }

  .summary-item__content:empty {
    display: none;
  }

  ${h} {
    justify-content: center;
  }

  ${c(a.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,S=n.div.withConfig({displayName:"SummaryCollageOneItemComponent"})`
  grid-column: 1 / -1;

  &&& {
    border-bottom: 0;

    .summary-item__content {
      margin: 0;
      @media (min-width: 0) and (max-width: ${a.lg}) {
        margin: 0;
      }
    }
    @media (min-width: 0) and (max-width: ${a.md}) {
      padding-bottom: 0;
    }
  }
`,w=o`
  &&& {
    grid-gap: ${d(4)};
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  ${S} {
    display: grid;
    align-items: center;
  }

  ${y}.summary-item__image {
    .summary-item__image {
      display: grid;
      justify-items: center;

      picture {
        max-width: 300px;
        ${c(a.lg)} {
          max-width: 400px;
        }
      }
    }

    .responsive-cartoon__caption {
      margin-top: 0;
      ${c(a.lg)} {
        margin-top: ${d(2)};
        width: 85%;
      }
    }
  }
`,k=o`
  ${p(0,a.lg)} {
    .summary-item__asset-container {
      ${r("margin",!0)};
    }
  }
`,x=o`
  &&& {
    grid-template-rows: unset;
    background-color: ${u("colors.discovery.body.dark.background")};
    max-width: ${a.xxl};

    ${p(a.sm,a.md)} {
      column-gap: ${d(9)};
      margin: ${d(0)};
      padding: ${d(0)};
    }
    ${c(a.md)} {
      column-gap: ${d(3)};
      margin: ${d(0)};
      padding: ${d(5)} ${d(3)};
    }
    ${c(a.lg)} {
      margin: ${d(0)};
      padding: ${d(7)} ${d(6)};
    }
    ${c(a.xl)} {
      column-gap: 2rem;
      margin: ${d(0)};
      padding: ${d(10)} ${d(8)};
    }
    ${c(a.xxl)} {
      column-gap: 2rem;
      margin: auto;
      padding: ${d(10)} ${d(8)};
    }
  }
  ${l} {
    color: ${u("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__rubric {
    color: ${u("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__dek {
    color: ${u("colors.discovery.body.dark.description")};
  }

  .summary-item__hed--hed-core-primary {
    ${g("typography.definitions.discovery.hed-core-primary")}
    color: ${u("colors.discovery.body.dark.heading")};
  }

  .summary-item__hed {
    color: ${u("colors.discovery.body.dark.heading")};
  }

  .summary-item--dark-background-right {
    ${c(a.md)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-3)};
    }
    ${c(a.lg)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-3)};
      padding: ${d(0)};
    }
    ${c(a.xl)} {
      grid-column: 2 / -2;
      margin: ${d(0)} ${d(-4)};
      padding: ${d(0)};
    }
    ${c(a.xxl)} {
      grid-column: 2 / -2;
      margin: ${d(0)};
      padding: ${d(0)};
    }

    .summary-item__asset-container {
      ${c(a.md)} {
        margin-left: ${d(-3)};
      }
      ${c(a.xl)} {
        margin-left: ${d(0)};
      }
    }
  }

  .summary-item__content {
    margin: ${d(0)};
    ${c(a.md)} {
      padding-right: ${d(3)};
    }
    ${c(a.lg)} {
      padding-right: ${d(5)};
    }
    ${c(a.xl)} {
      padding-right: ${d(3)};
    }
    ${c(a.xxl)} {
      padding-right: ${d(6)};
    }
  }
`,$=n.div.withConfig({displayName:"SummaryCollageOneGridWithMargin"})`
  ${v}
  ${({isSingleFeature:e})=>e&&w}

  ${({hasFullWidthImage:e})=>e&&k}
  
  ${({isFullBleedDarkBackground:e})=>e&&x}
`,T=n.div.withConfig({displayName:"SummaryCollageOneIsFullBleed"})`
  ${({isFullBleedDarkBackground:e})=>e&&o`
      background-color: ${u("colors.discovery.body.dark.background")};
      max-width: 100%;
    `}
`;e.exports={SummaryCollageOneTitle:b,SummaryCollageOneCtaLink:f,SummaryCollageOneGridWithMargin:$,SummaryCollageOneIsFullBleed:T,SummaryCollageOneItemComponent:S,SummaryCollageOneAnchorLink:C}},1588:function(e,t,i){const{asConfiguredComponent:n}=i(9);e.exports=n(i(1589),"SponsoredContentHeader")},1589:function(e,t,i){const n=i(8),o=i(1),a=i(0),{useIntl:r}=i(2),s=i(1462).default,{trackComponent:l}=i(5),{SponsoredContentHeaderWrapper:d,SponsoredContentHeaderExternalLink:c,SponsoredContentHeaderInfoBox:p,SponsoredContentHeaderBylineText:g,SponsoredContentHeaderResponsiveAsset:u,SponsoredContentHeaderSponsorName:m}=i(1590),{getBylineText:h,getLogoRatio:y,getSponsoredHeaderDisplayOptions:b,getValidBylineOption:f}=i(1591),C=({brandName:e,bylineOption:t,bylineVariant:i,campaignUrl:o,className:C,sponsorLogo:v,sponsorName:S})=>{a.useEffect(()=>{l("SponsoredContentHeader")},[]);const w=r(),k=f(t),{isBrandedLegacy:x,shouldDisplayLogo:$}=b({bylineOption:k,bylineVariant:i,hasLogo:!!v}),T=h({intl:w,bylineOption:k,brandName:e}),E=y({sponsorLogo:v});return a.createElement(d,{isBrandedLegacy:x,className:n(C,k.replace("_","-")),"data-testid":"SponsoredContentHeaderWrapper"},a.createElement(c,{additionalRelVals:["sponsored"],href:o||void 0,attributes:{"aria-label":w.formatMessage(s.sponsoredLinkCTA,{sponsorName:S})}},a.createElement(p,{isBrandedLegacy:x},a.createElement(g,{isBrandedLegacy:x,"data-testid":"SponsoredContentHeaderBylineText"},T),$?a.createElement(u,{altText:v.altText,constrainLogoByWidth:E>1,isBrandedLegacy:x,sources:v.sources}):a.createElement(m,{isBrandedLegacy:x},S))))};C.propTypes={brandName:o.string.isRequired,bylineOption:o.string.isRequired,bylineVariant:o.string.isRequired,campaignUrl:o.string.isRequired,className:o.string,sponsorLogo:o.any,sponsorName:o.string.isRequired},C.displayName="SponsoredContentHeader",e.exports=C},159:function(e,t,i){const n=i(8),o=i(1),a=i(0),{useIntl:r}=i(2),s=i(98),{storyVideoPosition:l}=i(184),d=i(178),c=i(188),p=i(11),g=i(21),{transformLegacySources:u}=i(76),m=i(133).default,{ContentHeaderLeadAsset:h,ContentHeaderResponsiveAsset:y,ContentHeaderLeadAssetContent:b,ContentHeaderLeadAssetCaption:f,ContentHeaderLeadAssetContentMedia:C,ContentHeaderLedeLightboxButton:v,ContentHeaderLeadRailAnchor:S,ContentHeaderLeadContentFullWidth:w,ContentHeaderLeadContentCaptionCredit:k,ContentHeaderLeadAssetAwards:x}=i(93),{useState:$,Fragment:T}=a,E="landscape",N="portrait",L=({awards:e,className:t,captionWidth:i,containerTheme:o,lede:p,mediaWidth:L,shouldRenderRailAnchor:I,showFullWidthLeadImage:B,socialIcons:P,hasLightboxButton:A,hasStaticPositionedAward:R,hasInvertedLedeBackground:D,hideLedeCaption:M})=>{const[H,O]=$((e=>{var t;const i=null===(t=null==e?void 0:e.masterAspectRatio)||void 0===t?void 0:t.split(":");return(null==e?void 0:e.restrictCropping)&&2===(null==i?void 0:i.length)&&Number(i[0])/Number(i[1])<=1?N:E})(p)),{formatMessage:_}=r(),W=({width:e,height:t})=>{e/t<=1&&O(N)},j=u(p),G="cnevideo"===p.modelName,F="gallery"===p.modelName,V="clip"===p.modelName,U=!M&&(p.caption&&p.caption.trim()||p.credit&&p.credit.trim()),z=a.createElement(f,{dangerousCaptionText:p.caption,dangerousCredit:p.credit,mediaWidth:L});return a.createElement(T,null,a.createElement(h,{className:n("lead-asset",t),mediaWidth:L,containerTheme:o,ledeContentType:p.contentType,ledeAssetOrientation:H,hasInvertedLedeBackground:D,"data-testid":"ContentHeaderLeadAsset"},a.createElement(b,null,a.createElement(C,{ledeContentType:p.contentType,showFullWidthLeadImage:B,mediaWidth:L,className:"lead-asset__content__"+p.contentType},!G&&!F&&!V&&a.createElement(T,null,e&&!R&&a.createElement(x,{awards:e,hasStaticPositionedAward:R}),a.createElement(y,Object.assign({},j,{onAssetLoaded:W,shouldRestrictCropping:null==p?void 0:p.restrictCropping,masterAspectRatio:null==p?void 0:p.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:L,"data-testid":"assetMedia"}))),G&&p.scriptEmbedUrl&&a.createElement(s,{shouldAutoplay:!0,scriptUrl:p.scriptEmbedUrl,shouldHaveTeaser:!0,videoEmbedPosition:l}),F&&a.createElement(d,Object.assign({},p,{showNoAdsFromParent:!0})),P&&a.createElement(g.Overlay,{links:P.links}),V&&a.createElement(y,Object.assign({},j,{onAssetLoaded:W,shouldRestrictCropping:null==p?void 0:p.restrictCropping,masterAspectRatio:null==p?void 0:p.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:L,"data-testid":"assetMedia"})),A&&a.createElement(v,{onClickHandler:()=>{document.querySelector(".responsive-image--expandable").click()},ButtonIcon:()=>a.createElement(c,null),hasEnableIcon:!0,btnStyle:"text",iconPosition:"before",inputKind:"button",isStaticText:!0,label:_(m.showAllPhotos),shouldRenderCaption:U}),U&&"fullbleed"!==i&&z,e&&R&&a.createElement(x,{awards:e,hasStaticPositionedAward:R}))),I&&a.createElement(S,{"data-testid":"ContentHeaderLeadRailAnchor"})),U&&"fullbleed"===i&&a.createElement(w,null,a.createElement(k,null,z)))};L.propTypes={awards:o.array,captionWidth:o.oneOf(["standard","fullbleed"]),className:o.string,containerTheme:o.oneOf(["standard","inverted","special"]),hasInvertedLedeBackground:o.bool,hasLightboxButton:o.bool,hasStaticPositionedAward:o.bool,hideLedeCaption:o.bool,lede:o.oneOfType([o.shape(p.propTypes),o.shape(s.propTypes)]).isRequired,mediaWidth:o.oneOf(["small","smallrule","grid","fullbleed"]),shouldRenderRailAnchor:o.bool,showFullWidthLeadImage:o.bool,socialIcons:o.shape(g.propTypes)},L.defaultProps={captionWidth:"standard",hasStaticPositionedAward:!1,hideLedeCaption:!1},e.exports=L,e.exports.transformLegacySources=u},1590:function(e,t,i){const n=i(3).default,{BaseText:o}=i(10),{calculateSpacing:a,getColorStyles:r,getTypographyStyles:s}=i(4),l=i(110),d=i(33),c=n.div.withConfig({displayName:"SponsoredContentHeaderWrapper"})`
  display: flex;
  justify-content: center;
  ${({theme:e})=>r(e,"background-color","colors.discovery.body.light.background")};
  padding: ${a(2)};
  width: 100%;
  min-height: 80px;

  ${({isBrandedLegacy:e})=>e?`\n    grid-column: 1 / -1;\n    padding: unset;\n    height: 60px;\n    min-height: unset;\n\n    &.light-theme {\n      ${({theme:e})=>r(e,"background-color","colors.background.light")}\n    }\n  `:""}
`,p=n(d).withConfig({displayName:"SponsoredContentHeaderExternalLink"})`
  text-decoration: none;
`,g=n.div.withConfig({displayName:"SponsoredContentHeaderInfoBox"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${({isBrandedLegacy:e})=>e?"& { flex-direction: unset; }":""}
`,u=n(o).withConfig({displayName:"SponsoredContentHeaderBylineText"})`
  ${({theme:e,isBrandedLegacy:t})=>t?`\n      ${s(e,"typography.definitions.globalEditorial.context-primary")};\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-end;\n      padding-right: ${a(2)};\n      height: 100%;\n\n      &.light-theme {\n        ${({theme:e})=>r(e,"color","colors.discovery.body.light.heading")}\n      }\n    }\n  `:""}
`;u.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.globalEditorial.syndication"};const m=n(l).withConfig({displayName:"SponsoredContentHeaderResponsiveAsset"})`
  &.responsive-asset {
    display: flex;
    align-items: center;
    margin-top: ${a(1)};
    overflow: visible;

    ${({theme:e,isBrandedLegacy:t})=>t?`\n      justify-content: flex-start;\n      margin-top: unset;\n      padding-left: ${a(2)};\n      border-left: 1px solid;\n      ${r(e,"border-color","colors.discovery.body.light.divider")};\n    `:""}
  }

  &.responsive-image {
    height: 60px;

    img {
      height: 100%;
    }

    ${({constrainLogoByWidth:e})=>e?"{\n      width: 60px;\n      height: unset;\n\n      img {\n        height: unset;\n      }\n    }":""}
  }
`,h=n(o).withConfig({displayName:"SponsoredContentHeaderSponsorName"})`
  display: flex;
  align-items: center;
  margin-top: ${a(.5)};

  ${({isBrandedLegacy:e,theme:t})=>e?`\n    justify-content: flex-start;\n    margin-top: unset;\n    padding-left: ${a(.5)};\n\n    &.light-theme {\n      ${r(t,"color","colors.discovery.body.light.syndication")};\n    }\n  `:""}
`;h.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.consumptionEditorial.description-feature"},e.exports={SponsoredContentHeaderWrapper:c,SponsoredContentHeaderExternalLink:p,SponsoredContentHeaderInfoBox:g,SponsoredContentHeaderBylineText:u,SponsoredContentHeaderResponsiveAsset:m,SponsoredContentHeaderSponsorName:h}},1591:function(e,t,i){const n=i(1462).default,o={brand_x_advertiser:n.bylineBrandXAdvertiser,branded_content:n.bylineBrandedContent,created:n.bylineCreated,paid_post:n.bylinePaidPost,produced:n.bylineProduced,produced_by_advertiser:n.bylineProducedByAdvertiser,produced_by_brand:n.bylineProducedByBrand,sponsored:n.bylineSponsored,sponsored_content:n.bylineSponsoredContent,in_collaboration:n.bylineInCollaboration,sponsored_by:n.bylineSponsoredBy,in_partnership:n.bylineInPartnership,advertisement_feature_with:n.bylineAdvertisementFeatureWith};function a(e){return Object.prototype.hasOwnProperty.call(o,e)?e:"produced_by_advertiser"}e.exports={BYLINE_TEMPLATES:o,getBylineText:function({intl:e,bylineOption:t="produced_by_advertiser",brandName:i}){return e.formatMessage(o[t],{brandName:i})},getLogoRatio:function({sponsorLogo:e}){var t,i,n,o;return((null===(i=null===(t=null==e?void 0:e.sources)||void 0===t?void 0:t.sm)||void 0===i?void 0:i.height)||0)/((null===(o=null===(n=null==e?void 0:e.sources)||void 0===n?void 0:n.sm)||void 0===o?void 0:o.width)||1)},getSponsoredHeaderDisplayOptions:function({bylineOption:e,bylineVariant:t,hasLogo:i}){const n=a(e),o="sponsored"===n||"produced"===n;return{isBrandedLegacy:o,shouldDisplayLogo:i&&("logo"===t||o)}},getValidBylineOption:a}},1592:function(e,t,i){const n=i(0),o=i(1),{trackComponent:a}=i(5),r=({children:e,name:t})=>{if(n.useEffect(()=>{a("Slot")},[]),!t)throw new Error("A slot must contain a name!");return e};r.propTypes={children:o.node.isRequired,name:o.string.isRequired};e.exports={Slot:r,getSlots:(e,t=[])=>{const i=new Set(t),o={};let a;return n.Children.forEach(e,e=>{a=e.props.name,e.type===r&&a&&(0===i.size||i.has(a))&&(o[a]=e)}),o}}},1593:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1594);e.exports=n(o,"FilterableSummaryList")},1594:function(e,t,i){const n=i(0),o=i(1),{useIntl:a}=i(2),{calculateSpacing:r}=i(4),{getSlots:s}=i(1463),l=i(191),d=i(239),c=i(54),{Disclaimer:p}=i(88),g=i(123),{trackComponent:u}=i(5),{componentTracking:m,googleAnalytics:h}=i(12),{FilterableSummaryListFullBleed:y,FilterableSummaryListWrapper:b,TitleWrapper:f,ChipWrapper:C,CarouselWrapper:v,FilterableSummaryListGrid:S}=i(1464),{ArticleGalleryCarouselBtnWrapper:w,ArticleGalleryCarouselButton:k}=i(247),x=i(1595).default,$={spacing:{sm:r(1.5),xl:r(2)},width:{sm:`calc(60% - ${r(1.5)})`,lg:`calc(27% - ${r(1.5)})`,xl:`calc(24% - ${r(2)})`,xxl:`calc(21% - ${r(2)})`}},T=({affiliateDisclaimer:e,buttonConfig:t,children:i,className:o,controlButtonIcon:r,controlPlacement:T,controlPosition:E,dangerousDek:N,dangerousHed:L,defaultToggleChipTitle:I,hasBorderBottom:B,hasCarouselSliderPagination:P,hasCustomSlider:A,hasImpressionTracking:R,hasNoHorizontalScrollCarousel:D,paginationStyle:M,hasPadding:H,hasPagination:O,hasProductDisclaimerAlternativeStyle:_,hasTitleMarginTop:W,hasTitleNoMargin:j,hasToggleGridColor:G,hasHigherHorizontalPadding:F,sectionTitleVariation:V,selectedToggleChipTitle:U,shouldAppendFilterInUrl:z,shouldDisplaySingleSlot:q,shouldNotDisplayAllLabel:K,shouldEnableBundleComponentAnalytics:Y,shouldEnableProductDisclaimer:Z,hasCarouselControl:X,trackingNamespace:J,isDotClickable:Q,layout:ee,pos:te})=>{n.useEffect(()=>{u("FilterableSummaryList")},[]);const{formatMessage:ie}=a(),ne=s(i),oe=Object.keys(ne),[ae,re]=n.useState(oe),[se,le]=n.useState(ae[0]),[de,ce]=n.useState(I),pe=L||N,ge=(null==J?void 0:J.toggle)||L,ue=(null==J?void 0:J.card)||L;if(0===ae.length)return null;const me=ae.length>1||q,he=ie(x.atArticleGalleryCarouselBtnText,{categoryName:t.name}),ye=()=>n.Children.map(ne[se].props.children,(e,t)=>{const i=m.addDataSectionTitleAttribute(Y,`${ue}/${se}/`,t,!1),o=n.cloneElement(e,{analyticsDataAttribute:i});return n.createElement("div",null,o)}),be=(e,t)=>{var i,n;le(t),q&&(e.detail.checked?(re([t]),U&&ce(U)):(le(oe[0]),re(oe),ce(I))),i=t,n="body",h.emitUniqueGoogleTrackingEvent("toggle-click",{clickText:i,clickType:n})};return n.useEffect(()=>{var e;{const t=decodeURIComponent(null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.hash),i=ae.findIndex(e=>"#"+e.toLowerCase()===t.toLowerCase());le(ae[i>=0?i:0])}},[ae]),n.createElement(b,{className:o,hasToggleGridColor:G,hasPadding:H,hasBorderBottom:B},pe&&n.createElement(f,{hasPadding:H,hasTitleMarginTop:W,as:c[V],dangerousHed:L,dangerousDek:N,hasTitleNoMargin:j}),me&&n.createElement(C,{hasToggleGridColor:G,hasPadding:H},n.createElement(d,{contentAlign:"center",layout:"nowrap",hasToggleGridColor:G,label:de},ae.map(e=>{const t=m.addDataSectionTitleAttribute(Y,`${ge}/${e}`),i=e===se;return K&&"All"===e?null:n.createElement(l,{analyticsDataAttribute:t,key:e,isChecked:i,hasToggleGridColor:G,onChange:t=>be(t,e),isAnchorUrl:z,shouldDisplaySingleChip:q},e)}))),function(){switch(ee){case"GridFourColumns":return n.createElement(S,null,ye());case"FullBleed":return n.createElement(y,null,ye());default:return n.createElement(v,null,n.createElement(p.TextCenterNoTopRule,{isEnabled:Z&&X,hasHigherHorizontalPadding:F,hasProductDisclaimerAlternativeStyle:_,disclaimerHtml:e}),n.createElement(g,{hasControls:!0,hasPagination:O,controlButtonIcon:r,controlPlacement:T,controlPosition:E,isDotClickable:Q,hasPadding:H,hasNoHorizontalScrollCarousel:D,hasImpressionTracking:R,paginationStyle:P&&"slider"===M?M:"bullet",hasCustomSlider:P&&A,dangerousHed:pe,pos:te},n.Children.map(ne[se].props.children,(e,t)=>{const i=m.addDataSectionTitleAttribute(Y,`${ue}/${se}/`,t,!1),o=n.cloneElement(e,{analyticsDataAttribute:i}),a=`${pe}/${se}`;return n.createElement(g.CarouselItem,Object.assign({},$,{key:`${se}-${t}`,carouselTitle:a,carouselItemIndex:t,carouselItemName:e.props.dangerousHed,pos:te}),o)})),t.showButton&&t.url&&n.createElement(w,null,n.createElement("div",{className:"more-products"},n.createElement(k,{className:"article-gallery__more-button",label:he,btnStyle:"outlined",ariaLabel:he,href:"/products/shop"+t.url,inputKind:"link"}))))}}())};T.propTypes={affiliateDisclaimer:o.string,buttonConfig:o.object,children:o.node.isRequired,className:o.string,controlButtonIcon:o.oneOf(["ChevronIcon","ArrowIcon"]),controlPlacement:o.oneOf(["right","space-between"]),controlPosition:o.oneOf(["top","bottom","center"]),dangerousDek:o.string,dangerousHed:o.string,defaultToggleChipTitle:o.string,hasBorderBottom:o.bool,hasCarouselControl:o.bool,hasCarouselSliderPagination:o.bool,hasCustomSlider:o.bool,hasHigherHorizontalPadding:o.bool,hasImpressionTracking:o.bool,hasNoHorizontalScrollCarousel:o.bool,hasPadding:o.bool,hasPagination:o.bool,hasProductDisclaimerAlternativeStyle:o.bool,hasTitleMarginTop:o.bool,hasTitleNoMargin:o.bool,hasToggleGridColor:o.bool,isDotClickable:o.bool,layout:o.string,paginationStyle:o.string,pos:o.number,sectionTitleVariation:o.string,selectedToggleChipTitle:o.string,shouldAppendFilterInUrl:o.bool,shouldDisplaySingleSlot:o.bool,shouldEnableBundleComponentAnalytics:o.bool,shouldEnableProductDisclaimer:o.bool,shouldNotDisplayAllLabel:o.bool,trackingNamespace:o.shape({toggle:o.string,card:o.string})},T.displayName="FilterableSummaryList",T.defaultProps={buttonConfig:{name:"",showButton:!1,url:""},controlButtonIcon:"ChevronIcon",controlPlacement:"space-between",controlPosition:"center",hasHigherHorizontalPadding:!1,hasImpressionTracking:!1,hasNoHorizontalScrollCarousel:!1,hasPagination:!0,hasTitleMarginTop:!1,isDotClickable:!1,shouldAppendFilterInUrl:!0,shouldDisplaySingleSlot:!1,shouldEnableBundleComponentAnalytics:!1,shouldEnableProductDisclaimer:!1,shouldNotDisplayAllLabel:!1},T.displayName="FilterableSummaryList",e.exports=T},1595:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({atArticleGalleryCarouselBtnText:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnText",defaultMessage:"VIEW ALL {categoryName}",description:"Article and Gallery carousel button text"}})},1677:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=t.AGE_GATE_COOKIE_KEY=t.AGE_GATE_ACCEPT=void 0,t.AGE_GATE_ACCEPT="accept",t.AGE_GATE_COOKIE_KEY="ageGate",t.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS=28},1678:function(e,t,i){e.exports=i(1679)},1679:function(e,t,i){const n=i(1),o=i(0),a=i(52),{PaywallInlineBarrierWrapper:r}=i(1680),{trackComponent:s}=i(5),l=function(e){o.useEffect(()=>{s("PaywallInlineBarrier")},[]);const{position:t,className:i}=e;return o.createElement(r,{className:i,"data-testid":"PaywallInlineBarrierWrapper"},o.createElement(a,{position:t,aria:{"aria-live":"polite"}}))};l.propTypes={className:n.string,position:n.string},l.defaultProps={position:"paywall-inline-barrier"},e.exports=l},1680:function(e,t,i){const{default:n}=i(3),o=n.aside.withConfig({displayName:"PaywallInlineBarrierWrapper"})`
  width: auto;
  height: auto;

  @media print {
    display: none;
  }
`;e.exports={PaywallInlineBarrierWrapper:o}},1681:function(e,t,i){const n=i(1),o=i(0),{useIntl:a}=i(2),r=i(14),s=i(38),l=i(1682).default,{componentTracking:d}=i(12),{useOnAdFilled:c}=i(72),{asConfiguredComponent:p}=i(9),{trackComponent:g}=i(5),{SummaryCollectionSplitColumnsWrapper:u,SummaryCollectionSplitColumnsItems:m,SummaryCollectionSplitColumnsRecsWrapper:h,SummaryCollectionSplitColumnsItem:y}=i(1683),b=({className:e,dangerousHed:t,guideItem:i,hasBackgroundColor:n,hasBorderItem:s,hasExtraRubricSpace:p,hasLessBottomSpace:b,hasTighterBylineSpacing:f,itemHedTag:C,location:v,recommendedItems:S,recommendedItemCount:w,shouldHideDangerousDek:k,shouldAppendReadMoreLinkForDek:x,shouldHideBylines:$,shouldEnableBundleComponentAnalytics:T,summaryItemRubricVariation:E,trackingNamespace:N})=>{o.useEffect(()=>{g("SummaryCollectionSplitColumns")},[]);const{formatMessage:L}=a(),{items:I,recommendedType:B,recommendedClickout:P}=S,A=C||(t?"h3":"h2"),[R]=c("trending-ad");return o.createElement(u,{className:e,"data-testid":"SummaryCollectionSplitColumnsWrapper",hasBackgroundColor:n},o.createElement(m,{"data-testid":"SummaryCollectionSplitColumnsItems",showTrendingAd:R},o.createElement(h,null,o.createElement("p",null,L(l.recommendedTitle,{recommendedType:B})),I.slice(0,w).map((e,t)=>{const i=d.addDataSectionTitleAttribute(T,null==N?void 0:N.item,t);return o.createElement(o.Fragment,{key:t},o.createElement(y,Object.assign({},e,{analyticsDataAttribute:i,variation:"TextBelowImageLeftHasRuleWithDek",hasBorder:s,hedTag:A,key:t,rubricVariation:E,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideDangerousDek:k,shouldAppendReadMoreLinkForDek:x,shouldHideBylines:$,hasLessBottomSpace:b,hasExtraRubricSpace:p})))}),P&&o.createElement(r.Utility,{label:L(l.viewAllButton,{location:v,recommendedType:B}),inputKind:"link",href:P})),o.createElement(y,Object.assign({},i[0],{image:i[0].lede,dangerousHed:v?L(l.guideItemHed,{location:v}):t,variation:"TextBelowImageLeftHedAndDek",hasBorder:s,hedTag:A,rubricVariation:E,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideBylines:$,hasTighterBylineSpacing:f,hasLessBottomSpace:b,hasExtraRubricSpace:p}))))};b.propTypes={className:n.string,dangerousHed:n.string,guideItem:n.arrayOf(n.shape(s.propTypes)).isRequired,hasBackgroundColor:n.bool,hasBorderItem:n.bool,hasExtraRubricSpace:n.bool,hasLessBottomSpace:n.bool,hasTighterBylineSpacing:n.bool,itemHedTag:n.string,location:n.string,recommendedItemCount:n.number,recommendedItems:n.shape({items:n.arrayOf(n.shape(s.propTypes)),recommendedType:n.string,recommendedClickout:n.string}).isRequired,shouldAppendReadMoreLinkForDek:n.bool,shouldEnableBundleComponentAnalytics:n.bool,shouldHideBylines:n.bool,shouldHideDangerousDek:n.bool,summaryItemRubricVariation:n.string,trackingNamespace:n.object},b.defaultProps={hasBackgroundColor:!0,hasBorderItem:!0,hasExtraRubricSpace:!1,hasLessBottomSpace:!1,hasTighterBylineSpacing:!1,recommendedItemCount:2,shouldAppendReadMoreLinkForDek:!0,shouldHideBylines:!0,shouldHideDangerousDek:!1},b.displayName="SummaryCollectionSplitColumns",e.exports=p(b,"SummaryCollectionSplitColumns")},1682:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({viewAllButton:{id:"SummaryCollectionSplitColumns.ViewAllButton",defaultMessage:"View All {location} {recommendedType}",description:"button label for view all button"},guideItemHed:{id:"SummaryCollectionSplitColumns.GuideItemHed",defaultMessage:"{location} Travel Guide",description:"dangerousHed for guideItem"},recommendedTitle:{id:"SummaryCollectionSplitColumns.RecommendedTitle",defaultMessage:"Recommended {recommendedType}",description:"recommended title for recircs"}})},1683:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(0),{default:a}=i(3),{BylineWrapper:r,BylinePreamble:s,BylineName:l,BylineLink:d}=i(97),c=i(38),{GridItem:p}=i(25),g=i(19),{calculateSpacing:u,getColorToken:m,getColorStyles:h,getTypographyStyles:y,minScreen:b,styledProperty:f}=i(4),{BREAKPOINTS:C}=i(6),v=a.div.withConfig({displayName:"SummaryCollectionSplitColumnsWrapper"})`
  margin: ${u(4)} 0;
  background-color: ${({hasBackgroundColor:e})=>e?m("colors.discovery.body.light.background"):"transparent"};
`,S=`\n  &:last-child {\n    padding-bottom: 0;\n    \n    ${b(C.md)}{\n      padding-bottom: ${u(2)};\n    }\n  }\n`,w=a(e=>{var{columnAmount:t,variation:i,shouldHideDangerousDek:a,hasExtraRubricSpace:r,hasLessBottomSpace:s,hasTighterBylineSpacing:l}=e,d=n(e,["columnAmount","variation","shouldHideDangerousDek","hasExtraRubricSpace","hasLessBottomSpace","hasTighterBylineSpacing"]);const p=c[i];return o.createElement(p,Object.assign({},d))}).withConfig({displayName:"SummaryCollectionSplitColumnsItem"})`
  ${v} & {
    padding-bottom: ${u(2)};

    ${b(C.md)} {
      border-bottom: 0;
    }

    .summary-item__rubric {
      ${y("typography.definitions.globalEditorial.context-primary")}
      display: block;
      color: ${m("colors.discovery.body.light.context-signature")};

      ${b(C.md)} {
        margin-bottom: ${({hasExtraRubricSpace:e})=>u(e?1:.5)};
      }
    }

    .summary-item__hed-link {
      color: ${m("colors.discovery.body.light.heading")};

      &::after {
        display: none;
      }
    }

    .summary-item__hed {
      ${y("typography.definitions.discovery.hed-bulletin-primary")}
      margin-bottom: 0;
    }

    .summary-item__dek {
      ${y("typography.definitions.discovery.description-page")}
      display: ${({shouldHideDangerousDek:e})=>e?"none":"block"};
      margin: ${u(2)} 0 ${u(1)};
      color: ${m("colors.discovery.body.white.description")};
    }

    .summary-item__content {
      padding-bottom: ${({hasLessBottomSpace:e})=>e?u(0):""};
    }

    .summary-item__byline {
      margin-top: ${({hasTighterBylineSpacing:e})=>u(e?1:2)};

      ${r},
      ${s},
      ${l},
      ${d} {
        ${y("typography.definitions.globalEditorial.accreditation-core")}
        color: ${m("colors.discovery.body.light.accreditation")};
      }

      ${d}:link {
        color: ${m("colors.discovery.body.light.accreditation")};
      }
    }

    .summary-item__metadata-secondary {
      margin: ${u(2)} 0 0 0;
    }

    ${f("hasBorder",!1,S)};
  }
`,k=a(g.ThreeUp).withConfig({displayName:"SummaryCollectionSplitColumnsItems"})`
  ${p} {
    grid-column: 1 / -1;
    margin-top: ${u(2)};
  }
  ${p}:first-of-type {
    margin: ${u(3)} 0;
    ${b(C.md)} {
      grid-column: span 7;
    }
  }
  ${p}:last-of-type {
    ${b(C.md)} {
      grid-column: span 5;
      margin: ${u(3)} 0;
    }
  }
`,x=a("div").withConfig({displayName:"SummaryCollectionSplitColumnsRecsWrapper"})`
  display: grid;
  grid-column-gap: ${u(3)};
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: ${u(2)};
  height: 100%;

  ${b(C.md)} {
    display: grid;
    grid-template-rows: 5% 75% 20%;
    grid-row-gap: ${u(1)};
    border-right: 1px solid;
    border-color: ${({theme:e})=>h(e,"border-color","colors.consumption.body.standard.divider")};
    padding-right: ${u(3)};
  }

  p {
    grid-column: span 6;
    grid-row: 1 / 1;
    align-self: center;
    margin: 0;
    ${({theme:e})=>y(e,"typography.definitions.foundation.link-primary")}
  }

  .summary-item {
    display: grid;
    grid-column-gap: 1rem;
    grid-column: span 6;
    grid-template-columns: 40% 60%;
    align-items: center;

    ${b(C.sm)} {
      grid-template-columns: 1fr 1fr;
    }

    ${b(C.md)} {
      display: unset;
      grid-column: span 3;
      grid-row: 2 / 2;
    }
  }

  .button {
    grid-column: span 6;
    max-height: ${u(6)};
    ${b(C.md)} {
      grid-column: 2 / span 4;
      grid-row: 3;
    }
    ${b(C.lg)} {
      justify-self: center;
      padding: 0 ${u(6)};
    }
  }
`;e.exports={SummaryCollectionSplitColumnsWrapper:v,SummaryCollectionSplitColumnsItems:k,SummaryCollectionSplitColumnsRecsWrapper:x,SummaryCollectionSplitColumnsItem:w}},1684:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1685);e.exports=n(o,"VersoFilterableSummaryList")},1685:function(e,t,i){const n=i(0),o=i(1),a=i(126),r=i(47),{useIntl:s}=i(2),{Slot:l}=i(1463),d=i(1526),c=i(1686),p=i(1689),{FilterableSummaryList:g}=i(1690),u=i(275),m=i(38),{trackComponent:h}=i(5),{formatGtmData:y,productImpressionTracking:b}=i(254),f=({copilotId:e,buttonConfig:t,ctaCardAspectRatio:i,dangerousHed:o,dangerousDek:f,dropShipSellers:C,groups:v,hasBorder:S,hasCarouselSliderPagination:w,hasImageGrid:k,hasAtRetailerNameLowerCase:x,hasPadding:$,hasProductPriceColor:T,hasProductNewPriceColor:E,hasProductWhiteBackground:N,hasGridColumn:L,hasUnderlineHed:I,isProductCardName:B,isProductCardRetailerName:P,hasMarginTopAuto:A,hasPLPBrandNameContextTitle:R,hasPLPCardNameDescriptionCore:D,paginationStyle:M,sectionTitleVariation:H,shouldEnableBundleComponentAnalytics:O,shouldHideDangerousDek:_,shouldHidePublishDate:W,showOfferUrl:j,summaryItemVariation:G,shouldUseProductPriceSecondary:F,isDropshipProduct:V,trackingNamespace:U,isDotClickable:z,layout:q})=>{n.useEffect(()=>{h("VersoFilterableSummaryList")},[]);const{formatMessage:K}=s(),Y=q||"Carousel",Z="ProductCarousel"===Y,X="GridFourColumns"===Y?"PLP":q;n.useEffect(()=>{window.addEventListener("scroll",r(()=>b(document.getElementsByClassName("impressionTracking"),X),1e3)),window.addEventListener("load",()=>b(document.getElementsByClassName("impressionTracking"),X))},[X]);function J(t){switch(Y){case"ProductCarousel":case"GridFourColumns":return(t=>t.items.map((t,i)=>n.createElement(u,Object.assign({},t,{key:`${t.dangerousHed}-${i}`,hasAtRetailerNameLowerCase:x,hasImageGrid:k,hasProductPriceColor:T,hasProductNewPriceColor:E,shouldUseProductPriceSecondary:F,hasProductWhiteBackground:N,isProductCardName:B,isProductCardRetailerName:P,hasMarginTopAuto:A,hasPLPBrandNameContextTitle:R,hasPLPCardNameDescriptionCore:D,hasUnderlineHed:I,hasCarouselControl:Z,layout:Y,copilotID:e,dropShipSellers:C,isDropshipProduct:V,showOfferUrl:j,hasImpressionTracking:!0,data_item:t,onClick:()=>y(window,t,i,X)}))))(t);case"ArticleCarousel":return(e=>{const t=m[G];return e.items.map((e,i)=>n.createElement(t,Object.assign({},e,{key:`${e.dangerousHed}-${i}`,hasBorder:S,hasUnderlineHed:I,shouldHideDangerousDek:_,shouldHidePublishDate:W})))})(t);default:return t.items.map((e,t)=>n.createElement(d,Object.assign({},e,{key:`${e.hed}-${t}`})))}}const Q=L&&"GridFourColumns"===Y,[ee]=n.useState(parseInt(a(),10));return v&&0!==v.length?n.createElement(g,{dangerousHed:o,dangerousDek:f,sectionTitleVariation:H,shouldEnableBundleComponentAnalytics:O,hasImpressionTracking:!0,trackingNamespace:U,isDotClickable:z,hasCarouselSliderPagination:w,hasCarouselControl:Z,hasToggleGridColor:Q,hasPadding:$,layout:Y,pos:ee,paginationStyle:M,buttonConfig:t},v.map(e=>{const t=J(e);e.url&&t.push(n.createElement(c,{aspectRatio:i,key:"cta-"+e.label,url:e.url},K(p.ctaMessage,{groupName:e.label.toLocaleLowerCase()})));const o=t.filter(e=>{var t,i,n;return((null===(i=null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.image)||void 0===i?void 0:i.id)||(null===(n=null==e?void 0:e.props)||void 0===n?void 0:n.aspectRatio))&&e});return n.createElement(l,{key:e.label,name:e.label},o)})):null};f.propTypes={buttonConfig:o.object,copilotId:o.string,ctaCardAspectRatio:o.arrayOf(o.number),dangerousDek:o.string,dangerousHed:o.string,dropShipSellers:o.arrayOf(o.string),groups:o.arrayOf(o.object),hasAtRetailerNameLowerCase:o.bool,hasBorder:o.bool,hasCarouselSliderPagination:o.bool,hasGridColumn:o.bool,hasImageGrid:o.bool,hasMarginTopAuto:o.bool,hasPadding:o.bool,hasPLPBrandNameContextTitle:o.bool,hasPLPCardNameDescriptionCore:o.bool,hasProductNewPriceColor:o.bool,hasProductPriceColor:o.bool,hasProductWhiteBackground:o.bool,hasToggleGridColor:o.bool,hasUnderlineHed:o.bool,isDotClickable:o.bool,isDropshipProduct:o.bool,isProductCardName:o.bool,isProductCardRetailerName:o.bool,layout:o.string,paginationStyle:o.string,sectionTitleVariation:o.string,shouldEnableBundleComponentAnalytics:o.bool,shouldHideDangerousDek:o.bool,shouldHidePublishDate:o.bool,shouldUseProductPriceSecondary:o.bool,showNewProductCardDesign:o.bool,showOfferUrl:o.bool,summaryItemVariation:o.string,trackingNamespace:o.shape({toggle:o.string,card:o.string})},f.displayName="VersoFilterableSummaryList",f.defaultProps={ctaCardAspectRatio:[2,1],dropShipSellers:[],hasAtRetailerNameLowerCase:!1,hasMarginTopAuto:!1,isDotClickable:!1,isDropshipProduct:!1,isProductCardRetailerName:!1,layout:"Carousel",sectionTitleVariation:"TextCenter",shouldEnableBundleComponentAnalytics:!1,showNewProductCardDesign:!1,summaryItemVariation:"TextBelowLeft"},e.exports=f},1686:function(e,t,i){e.exports=i(1687)},1687:function(e,t,i){const n=i(0),o=i(1),{CTACardBody:a,CTACardContent:r,CTACardFooter:s,CTACardIcon:l,CTACardText:d,CTACardWrapper:c}=i(1688),p=({aspectRatio:e,children:t,url:i})=>n.createElement(c,{aspectRatio:e},n.createElement(r,null,n.createElement(a,null,n.createElement(d,{href:i},t)),n.createElement(s,null,n.createElement("a",{href:i},n.createElement(l,null)))));p.propTypes={aspectRatio:o.arrayOf(o.number),children:o.node.isRequired,url:o.string.isRequired},p.defaultProps={aspectRatio:[1,1]},e.exports=p},1688:function(e,t,i){const{default:n}=i(3),{BREAKPOINTS:o}=i(6),{calculateSpacing:a,getColorToken:r,getDecoration:s,minScreen:l}=i(4),{BaseLink:d}=i(10),c=i(137),p=n.div.withConfig({displayName:"CTACardWrapper"})`
  position: relative;
  border-radius: ${({theme:e})=>s(e,"cardRadiusSm")};
  background-color: ${r("colors.discovery.body.brand.background")};
  padding-top: ${({aspectRatio:e})=>e[1]/e[0]*100}%;

  ${l(o.md)} {
    border-radius: ${({theme:e})=>s(e,"cardRadiusMd")};
  }

  ${l(o.lg)} {
    border-radius: ${({theme:e})=>s(e,"cardRadiusLg")};
  }
`,g=n.div.withConfig({displayName:"CTACardContent"})`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  padding: 0 ${a(3)} ${a(2)}
    ${a(3)};

  ${l(o.lg)} {
    padding: 0 ${a(5)} ${a(5)}
      ${a(5)};
  }
`,u=n.div.withConfig({displayName:"CTACardBody"})`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
`,m=n.div.withConfig({displayName:"CTACardFooter"})`
  height: ${a(6)};
`,h=n(d).withConfig({displayName:"CTACardText"})``;h.defaultProps={colorToken:"colors.discovery.body.brand.heading",typeIdentity:"typography.definitions.discovery.hed-core-secondary"};const y=n(c).withConfig({displayName:"CTACardIcon"})`
  border-radius: 50%;
  background-color: ${r("colors.discovery.body.brand.context-signature")};
  width: ${a(6)};
  height: ${a(6)};
  fill: ${r("colors.discovery.body.brand.context-texture")};
`;e.exports={CTACardBody:u,CTACardContent:g,CTACardFooter:m,CTACardIcon:y,CTACardText:h,CTACardWrapper:p}},1689:function(e,t,i){const{defineMessages:n}=i(2);e.exports=n({ctaMessage:{id:"VersoFilterableSummaryList.CTAMessage",defaultMessage:"See more {groupName} recipes",description:"Message to display in the CTACard"}})},1690:function(e,t,i){const{default:n}=i(3),{BREAKPOINTS:o}=i(6),{minScreen:a,calculateSpacing:r,minMaxScreen:s}=i(4),{cssVariablesGrid:l,applyGridSpacing:d}=i(16),{LabelText:c,ListWrapper:p}=i(124),{CarouselListItem:g}=i(60),{CarouselWrapper:u,ChipWrapper:m}=i(1464),h=n(i(1593)).withConfig({displayName:"FilterableSummaryList"})`
  margin: 0 auto;
  ${({hasToggleGridColor:e})=>!e&&`max-width:${o.fullBleed};\n  ${l()}`}
  ${({hasPadding:e})=>!e&&d("padding")}
  ${g}:first-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-left:${r(8)};\n      ${s(0,o.md)}\n      {  \n        padding-left:${r(3)};  \n      }`:"padding-left: 0;"}
  }
  ${g}:last-child {
    box-sizing: content-box;
    ${({hasPadding:e})=>e?`padding-right:${r(8)};\n    ${s(0,o.md)}\n     { padding-right:${r(3)}; \n    }`:"padding-right: var(--grid-margin);"}
  }
  ${a(o.xxl)} {
    ${m},
    ${u} {
      ${({hasToggleGridColor:e})=>!e&&"margin-left: revert;\n      margin-right: revert;"}
      ${c} ,
      ${p} {
        padding-right: revert;
        padding-left: revert;
      }
      ${g}:first-child {
        ${({hasPadding:e})=>!e&&"padding-left: revert;"}
      }
      ${g}:last-child {
        ${({hasPadding:e})=>!e&&"padding-right: revert;"}
      }
    }
  }
`;e.exports={FilterableSummaryList:h}},176:function(e,t,i){e.exports={Circle:i(244),Vogue:i(248)}},1859:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1860);e.exports=n(o,"AgeGate")},1860:function(e,t,i){const n=i(0),o=i(1),{useIntl:a}=i(2),{trackComponent:r}=i(5),{HiddenCheckbox:s,Overlay:l,Title:d,Text:c,Logo:p,DefaultLogo:g,AgeGateButton:u}=i(1861),{AGE_GATE_ACCEPT:m,AGE_GATE_COOKIE_KEY:h}=i(1677),{hasContentWarnings:y,acceptAgeGatePrompt:b}=i(1862),{getCookie:f}=i(49),C=i(1863).default,v=({hed:e,dek:t,acceptLabel:i,declineLabel:o,logo:v,content:S,cookieExpirationInDays:w,brandContentWarnings:k})=>{n.useEffect(()=>{r("AgeGate")},[]);const{useState:x,useEffect:$}=n,{formatMessage:T}=a(),[E,N]=x(!1);if($(()=>{const e=!(f(h)===m)&&y({content:S,brandContentWarnings:k});N(e)},[S,k]),!E)return null;const L=null!=t?t:T(C.ageGateDekText);return n.createElement(n.Fragment,null,n.createElement(s,{id:"age-gate-check"}),n.createElement(l,{id:"age-gate-overlay",role:"dialog","aria-labelledby":"age-gate-title","aria-describedby":"age-gate-description"},v?n.createElement(p,{src:v,alt:e}):n.createElement(g,{width:96,height:96}),n.createElement(d,{as:"h2",id:"age-gate-title"},null!=e?e:T(C.ageGateHedText)),L&&n.createElement(c,{id:"age-gate-description"},L),n.createElement("label",{htmlFor:"age-gate-check",key:"age-gate-label-accept"},n.createElement(u,{inputKind:"link",onClickHandler:()=>((e,t)=>{e(!1),b(t)})(N,w),key:"age-gate-button-accept",dataAttrs:{"data-test-id":"age-gate-button-accept"},label:i||T(C.ageGateAcceptLabel)})),n.createElement(u,{href:"/",inputKind:"link",key:"age-gate-button-decline",dataAttrs:{"data-test-id":"age-gate-button-decline"},label:o||T(C.ageGateDeclineLabel)})))};v.displayName="AgeGate",v.propTypes={acceptLabel:o.string,brandContentWarnings:o.array,content:o.object.isRequired,cookieExpirationInDays:o.number,declineLabel:o.string,dek:o.string,hed:o.string,logo:o.string},v.defaultProps={brandContentWarnings:["sexual_content","drug_content","death_content","alcohol_content"]},e.exports=v},1861:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AgeGateButton=t.Text=t.Title=t.Logo=t.DefaultLogo=t.Overlay=t.HiddenCheckbox=void 0;const o=n(i(3)),a=i(18),r=i(4),s=n(i(145)),l=i(10),d=n(i(14));t.HiddenCheckbox=o.default.input.withConfig({displayName:"AgeGateCheckbox"})``,t.HiddenCheckbox.defaultProps={hidden:!0,type:"checkbox"},t.Overlay=o.default.div.withConfig({displayName:"AgeGateOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: ${r.getColorToken("colors.consumption.lead.inverted.background")};
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  text-align: center;

  ${t.HiddenCheckbox}:checked ~ & {
    display: none;
  }

  @media (min-width: ${a.minThresholds.lg}px) {
    padding: 0 10rem;
  }

  @media (min-width: ${a.minThresholds.xl}px) {
    padding: 0 20rem;
  }
`,t.DefaultLogo=o.default(s.default.AgeGate).withConfig({displayName:"AgeGateDefaultLogo"})`
  margin: 0 0 ${r.calculateSpacing(3)};
  fill: ${({theme:e})=>r.getColorToken(e,"colors.consumption.lead.inverted.heading")};
  width: 96px;
  height: 96px;

  path:first-of-type {
    fill: ${({theme:e})=>r.getColorToken(e,"colors.consumption.lead.inverted.accent")};
  }
`,t.Logo=o.default.img.withConfig({displayName:"AgeGateLogo"})`
  margin: 0 0 ${r.calculateSpacing(3)};
  width: 96px;
  height: 96px;
`,t.Title=o.default(l.BaseText).withConfig({displayName:"AgeGateTitle"})`
  margin: 0 0 ${r.calculateSpacing(2)};

  & + label,
  & + button {
    margin-top: ${r.calculateSpacing(2)};
  }
`,t.Title.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.hed-bulletin"},t.Text=o.default(l.BaseText).withConfig({displayName:"AgeGateText"})`
  margin: 0 0 ${r.calculateSpacing(4)};
`,t.Text.defaultProps={colorToken:"colors.consumption.lead.inverted.heading",typeIdentity:"typography.definitions.consumptionEditorial.description-core"},t.AgeGateButton=o.default(d.default.Primary).withConfig({as:"a",displayName:"AgeGateButton"})`
  margin: 0 0 ${r.calculateSpacing(2)};
`},1862:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.acceptAgeGatePrompt=t.hasContentWarnings=void 0;const n=i(1677),{createCookie:o}=i(49);t.hasContentWarnings=({content:e,brandContentWarnings:t}={})=>{const{contentWarnings:i}=e||{},n=null==t?void 0:t.some(e=>null==i?void 0:i.some(t=>t.slug===e));return Boolean(n)};t.acceptAgeGatePrompt=e=>{document.cookie=o(n.AGE_GATE_COOKIE_KEY,n.AGE_GATE_ACCEPT,{expirationInMs:864e5*(e||n.AGE_GATE_COOKIE_EXPIRATION_IN_DAYS),path:"/"})}},1863:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({ageGateHedText:{id:"AgeGate.HedText",defaultMessage:"Are you 18 or over?",description:"Age Gate title"},ageGateDekText:{id:"AgeGate.DekText",defaultMessage:"This material is intended for people over the age of 18",description:"Age Gate description"},ageGateAcceptLabel:{id:"AgeGate.AcceptLabel",defaultMessage:"I am 18+",description:"Age Gate accept button label"},ageGateDeclineLabel:{id:"AgeGate.DeclineLabel",defaultMessage:"I'm under 18",description:"Age Gate decline button label"}})},1864:function(e,t,i){const{asConfiguredComponent:n}=i(9),{asVariation:o}=i(13),a=i(1865);a.WithAdRail=o(a,"WithAdRail",{adRail:!0}),a.OneColumn=o(a,"OneColumn",{adRail:!1}),a.OneColumnNarrow=o(a,"OneColumnNarrow",{adRail:!1,isNarrowContentWell:!0}),e.exports=n(a,"ChunkedArticleContent")},1865:function(e,t,i){const n=i(1),o=i(0),a=i(8),r=i(19),{PaymentGateway:s}=i(24),l=i(58),d=i(1678),c=i(142),p=i(1866),{ArticlePageDisclaimer:g,ArticlePageChunksContent:u,ArticlePageChunks:m,ArticlePageDisclaimerGrid:h,PaywallInlineBarrierWithWrapperGrid:y}=i(1435),b=({body:e,hasProduct:t,hasProductLisitingCarousel:i,isAffiliateLinksDisabled:n,hasTopSpacing:c,horizontalRuleStyle:b,interlude:f,multiChunkRailStrategy:C,shouldBlurText:v,shouldUsePersistentAd:S,singleChunkRailStrategy:w,variations:k,hideRecircMostPopular:x,recircMostPopular:$,showFirstRailRecirc:T,hideAutoDisclaimer:E,wordsToDisplay:N,hideAffiliateDisclaimer:L,hideProductDisclaimer:I})=>{const B=k&&k.adRail,P=a("article__body",{"article__body--grid-margins":!B}),A=B?r.NarrowContentWithWideAdRail:l,R=B?r.NarrowContentWithWideAdRail:r.WithMargins;return o.createElement(u,{isNarrowContentWell:k.isNarrowContentWell,shouldBlurText:v},(t||i)&&!n&&!E&&!L&&I&&o.createElement(h,{adRail:B,as:R},o.createElement(g,null)),o.createElement(m,{hasTopSpacing:c,horizontalRuleStyle:b,"data-testid":"ArticlePageChunks"},o.createElement(p,{jsonml:e,adRail:B,multiChunkRailStrategy:C,interlude:f,FullBleedContentWrapper:A,GeneralContentWrapper:R,recircMostPopular:$,shouldUsePersistentAd:S,singleChunkRailStrategy:w,hideRecircMostPopular:x,showFirstRailRecirc:T,wordsToDisplay:N,hideAffiliateDisclaimer:L})),o.createElement(s,{group:"paywall"},o.createElement(e=>o.createElement(y,{adRail:B,as:R},o.createElement("div",{className:a("body","body__inline-barrier",P)},o.createElement("div",{className:"container container--body"},o.createElement("div",{className:"container--body-inner"},o.createElement(d,Object.assign({},e)))))),null)))};b.propTypes={body:n.array.isRequired,hasProduct:n.bool,hasProductLisitingCarousel:n.bool,hasTopSpacing:n.bool,hideAffiliateDisclaimer:n.bool,hideAutoDisclaimer:n.bool,hideProductDisclaimer:n.bool,hideRecircMostPopular:n.bool,horizontalRuleStyle:n.oneOf(["thin"]),interlude:n.shape(Object.assign(Object.assign({},c.propTypes),{isRailEligible:n.boolean})),isAffiliateLinksDisabled:n.bool,multiChunkRailStrategy:n.oneOf(["alternate"]),recircMostPopular:n.array,shouldBlurText:n.bool,shouldUsePersistentAd:n.bool,showFirstRailRecirc:n.bool,singleChunkRailStrategy:n.oneOf(["split-in-three"]),variations:n.shape({adRail:n.bool,isNarrowContentWell:n.bool}),wordsToDisplay:n.number},b.defaultProps={hasTopSpacing:!0,hideAutoDisclaimer:!1,isAffiliateLinksDisabled:!1,shouldBlurText:!1,variations:{}},b.displayName="ChunkedArticleContent",e.exports=b},1866:function(e,t,i){const n=i(0),o=i(1),a=i(74),{default:r}=i(162),{withRecircContextConsumer:s}=i(174),l=i(37),{PaymentGateway:d}=i(24),c=i(58),p=i(52),{InContent:g}=i(61),u=i(140),m=i(469),h=i(142),y=s(i(512)),b=i(1867),f=i(121),C=i(470),{showRecircMostPopular:v}=i(1869),S=i(271),{processLinks:w,processCeros:k,processTiktok:x,processSidebarHeadings:$}=i(282),{connectDomain:T}=i(17),E=T("payment"),N=T("featureFlags"),{shouldRenderNothing:L}=i(476),I=i(499),{ArticlePageChunksGrid:B}=i(1435),{ArticlePageSplitAdRail:P,ArticlePageSplitAdRailContent:A,ArticlePageSplitAdRailTop:R,ArticlePageSplitAdRailMiddle:D,ArticlePageSplitAdRailBottom:M,ArticlePageBodyGridContainer:H}=i(1435);const O=new r({a:w,blockquote:({props:e})=>({type:m,props:e}),ceros:k,h2:$,tiktok:x,"cm-unit":function(){return n.createElement("div",null,n.createElement(d,{className:"consumer-marketing-unit",group:"consumer-marketing"},n.createElement(p,{position:"article-mid-content",secondPosition:"in-content"})),n.createElement(g,null))},"inline-embed":S,"inline-recirc":e=>n.createElement(y,Object.assign({},e,{className:"article-inline-recirc-wrapper"})),"native-ad":e=>n.createElement(d,{group:"ads"},n.createElement(l,Object.assign({},e))),"inline-newsletter":e=>n.createElement(b,Object.assign({},e))});function _(e){return function(e){return Array.isArray(e)&&"string"==typeof e[0]}(e)&&e[1]&&"object"==typeof e[1]&&!Array.isArray(e[1])?e.slice(2):e.slice(1)}function W(e,t){return`${e}-${t}`}class j{constructor({adRail:e,GeneralContentWrapper:t=(()=>null),FullBleedContentWrapper:i=(()=>null),interlude:o,multiChunkRailStrategy:a,recircMostPopular:r,shouldRenderMidContent:s,shouldShowMostPopular:l,shouldUsePersistentAd:d,singleChunkRailStrategy:c,hideRecircMostPopular:p,showFirstRailRecirc:g}={}){var u;this.adRail=e,this.multiChunkRailStrategy=a,this.chunkCount=0,this.shouldRenderMidContent=s,this.shouldUsePersistentAd=d,this.GeneralContentWrapper=t,this.FullBleedContentWrapper=i,this.finalAdSet=!1,this.isSingleChunk=!1,this.singleChunkRailStrategy=c,this.interlude=(null===(u=null==o?void 0:o.strategy)||void 0===u?void 0:u.enabled)&&o.isRailEligible?n.createElement(h,Object.assign({},o,{isRightRail:!0})):null,this.interludeSet=!1,this.mostPopular=l&&!p&&n.createElement(C,{className:"article-recirc-most-popular-wrapper",items:r}),this.showFirstRailRecirc=g}determineAd(){if(this.shouldUsePersistentAd)return this.interludeSet=!0,this.persistentAd();const e=this.stickyAd(this.showFirstRailRecirc);return this.interludeSet=!0,e}showAds(e){if(1===this.chunkCount)return this.determineAd();if(!this.finalAdSet){const t=this.stickyAd(e);return this.interludeSet=!0,t}return null}getAdSlot(e){return n.createElement(n.Fragment,null,n.createElement(d,{group:"ads"},e,n.createElement(l,{position:"rail"})),n.createElement(d,{group:"consumer-marketing"},n.createElement(p,{position:"display-rail"})))}withStickyBox(e,t={}){return e&&n.createElement(u,Object.assign({},t),e)}renderSplitAdRail(){const e=this.withStickyBox(this.getAdSlot(null)),t=this.withStickyBox(this.mostPopular),i=this.withStickyBox(this.getAdSlot(null));return n.createElement(P,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{selector:".content-bottom-anchor",edge:"bottom"}},n.createElement(A,{className:"split-ad-rail-content"},n.createElement(R,null,e),this.showFirstRailRecirc&&n.createElement(D,{className:"split-ad-rail-middle"},t),n.createElement(M,{className:"split-ad-rail-bottom"},i)))}renderAdRail(e){return this.isSingleChunk&&"split-in-three"===this.singleChunkRailStrategy?this.renderSplitAdRail():this.showAds(e)}closeSmallGroup(e,t,i){if(e.length>0){++this.chunkCount;const o=this.GeneralContentWrapper;return t.concat([n.createElement(B,{adRail:this.adRail,as:o,key:W("small-group",i)},n.createElement(I,{className:"body__container article__body"},O.convert(["div",{className:"body__inner-container"},...e])),this.adRail&&this.renderAdRail("final"!==i))])}return t}isMultiChunkRailStrategyAlternate(){return"alternate"===this.multiChunkRailStrategy}shouldRenderAd(){return!this.isMultiChunkRailStrategyAlternate()||this.chunkCount%2==1}shouldRenderMostPopular(e){return this.isMultiChunkRailStrategyAlternate()&&e?this.chunkCount%2==0:e}getChunkAdRailContent(e,t){return n.createElement(n.Fragment,null,(this.shouldRenderAd()||!t)&&this.getAdSlot(e),this.shouldRenderMostPopular(t)&&this.mostPopular)}injectInlineRecirc(e){let t=0,i=0;return e.reduce((n,o,a)=>this.isParagraph(o)?(t++,this.isParagraph(e[a+1])&&this.shouldInsertRecirc(t,i)?(t=0,n.concat([o,["inline-recirc",{reelId:++i}]])):n.concat([o])):n.concat([o]),[])}isParagraph(e){return e&&"p"===e[0]}persistentAd(){return n.createElement(f,{anchorTop:{selector:"[data-testid='ContentHeaderLeadRailAnchor']"},anchorBottom:{edge:"bottom"}},this.getChunkAdRailContent(this.interlude,this.showFirstRailRecirc))}shouldInsertRecirc(e,t){return e>=(0===t?5:8)}stickyAd(e){const t=!this.interludeSet&&this.interlude,i=this.getChunkAdRailContent(t,e);return n.createElement(n.Fragment,null,this.withStickyBox(i,{isExpanded:!!t}))}wrapInFullSizeContainer(e,t,i){const o=this.FullBleedContentWrapper;return t.concat([n.createElement(o,{key:W("full",i)},n.createElement(H,{className:"body__grid-container",as:I,shouldDisableMaxWidth:!0,shouldEnableDataJourneyHook:!1},O.convert(e)))])}visit(e){let t=_(e),i=[],o=[];this.isSingleChunk=!t.some(e=>"ad"===e[0]),this.finalAdSet=!1;return t.filter(this.isParagraph).length>10&&(t=this.injectInlineRecirc(t)),t.forEach((e,t)=>{const[a]=e;"ad"===a?this.shouldRenderMidContent&&(i=this.closeSmallGroup(o,i,t),o=[],i=i.concat([n.createElement(c,{className:"full-bleed-ad row-mid-content-ad",key:W("ad",t)},n.createElement(d,{group:"ads"},n.createElement(l,{position:"mid-content",shouldDisplayLabel:!0,hideLabelOnInitialRender:!0})))])):!this.adRail&&function(e){const t=e[0],i=e[1]||{},n="inline-embed"===t&&"callout:feature-large"===i.type,o="inline-embed"===t&&"callout:feature-medium"===i.type;return n||o||"ad"===t}(e)?(i=this.closeSmallGroup(o,i,t),o=[],i=this.wrapInFullSizeContainer(e,i,t)):o=o.concat([e])}),i=this.closeSmallGroup(o,i,"final"),this.finalAdSet=!0,i}}function G({adRail:e,FullBleedContentWrapper:t,featureFlags:i,GeneralContentWrapper:o,interlude:a,jsonml:r,multiChunkRailStrategy:s,payment:l,recircMostPopular:d,shouldUsePersistentAd:c,singleChunkRailStrategy:p,hideRecircMostPopular:g,showFirstRailRecirc:u,wordsToDisplay:m}){n.useEffect(()=>{const e=document.querySelector(".split-ad-rail-content"),t=document.querySelector(".split-ad-rail-middle"),i=document.querySelector(".split-ad-rail-bottom");if(e&&t&&i){const n=new IntersectionObserver((e=>t=>{const[i]=t;i.intersectionRatio<e&&i.target.remove()})(.95),{root:e,threshold:.95});return n.observe(t),n.observe(i),()=>{n.disconnect()}}return()=>{}});const h=!L("ads",l,i),y=v(r,m);return new j({adRail:e,FullBleedContentWrapper:t,GeneralContentWrapper:o,interlude:a,multiChunkRailStrategy:s,recircMostPopular:d,shouldRenderMidContent:h,shouldShowMostPopular:y,shouldUsePersistentAd:c,singleChunkRailStrategy:p,hideRecircMostPopular:g,showFirstRailRecirc:u}).visit(r)}G.defaultProps={multiChunkRailStrategy:"default",singleChunkRailStrategy:"default"},G.propTypes={adRail:o.bool,featureFlags:o.object,FullBleedContentWrapper:o.func,GeneralContentWrapper:o.func,hideRecircMostPopular:o.bool,interlude:o.shape(Object.assign(Object.assign({},h.propTypes),{isRailEligible:o.boolean})),jsonml:o.array.isRequired,multiChunkRailStrategy:o.oneOf(["default","alternate"]),payment:o.object,recircMostPopular:o.array,shouldUsePersistentAd:o.bool,showFirstRailRecirc:o.bool,singleChunkRailStrategy:o.oneOf(["default","split-in-three"]),wordsToDisplay:o.number},e.exports=n.memo(E(N(G)),(function(e,t){return a(e,t)})),e.exports.Chunks=G},1867:function(e,t,i){const n=i(1868),{asConfiguredComponent:o}=i(9);e.exports=o(n,"SlimNewsletterWrapper")},1868:function(e,t,i){const n=i(0),{googleAnalytics:o}=i(12),{connector:a}=i(17),r=i(462),{getNewsletterSubscriptions:s}=i(489);class l extends n.Component{constructor(e){super(e),this.fetchNewsletterSubscriptions=async e=>{try{const t=await s(e);if(200===t.status)return t.newsletterSubscriptions&&t.newsletterSubscriptions.data}catch(e){console.log(e)}return{}},this.state={}}async componentDidMount(){let e,t;const i=this.props.newsletters&&this.props.newsletters.map(e=>e.newsletterId)||[];if(document){e="nl"===new URLSearchParams(document.location.search).get("utm_source")}const{user:n,userPlatform:a}=this.props,{userPlatformProxy:r,xClientID:s}=a||{};if(n.isAuthenticated){const e={amgUUID:n.amguuid,newsletterIds:i,userPlatformProxy:r,xClientID:s,provider:"sailthru"},o=(await this.fetchNewsletterSubscriptions(e)).filter(e=>"SUBSCRIBED"===e.attributes.status).map(e=>e.attributes.newsletterId);t=i.find(e=>!o.includes(e))}else t=i[0];this.props.isNewsletterSlim&&!e&&t&&o.emitGoogleTrackingEvent("newsletter-loaded-inlineslim",{newslettterId:t}),this.setState(Object.assign(Object.assign({},this.state),{isSourceNewsletter:e,newsletterToShow:t}))}render(){let e;const{isNewsletterSlim:t,isNewsletterAggressive:i,newsletterType:o,patternType:a,showToggleForLoggedInUser:s,user:l}=this.props;("aggressive-newsletter"===o&&i||"slim-newsletter"===o&&t)&&(e=!0);const{isSourceNewsletter:d,newsletterToShow:c}=this.state,p=this.props.newsletters&&this.props.newsletters.find(e=>e.newsletterId===c);return!d&&e&&p?n.createElement(r,Object.assign({},p,{enableSlimUnitToggle:s&&(null==l?void 0:l.isAuthenticated)&&(null==l?void 0:l.email),newsletterType:o,patternType:a,userEmail:(null==l?void 0:l.isAuthenticated)&&(null==l?void 0:l.email)})):null}}l.propTypes=r.propTypes,l.defaultProps=r.defaultProps,l.displayName="SlimNewsletterWrapper",e.exports=a(l,{keysToPluck:["user","userPlatform"]})},1869:function(e,t,i){const{showRecircMostPopular:n}=i(1870);e.exports={showRecircMostPopular:n}},1870:function(e,t){const i=(e=[])=>Array.isArray(e)&&e.reduce((e,t,n)=>Array.isArray(t)&&t.length>1?e+i(t):"string"==typeof t&&0!==n?e+t.trim().replace(/\s+/gi," ").split(" ").length:e,0);e.exports={showRecircMostPopular:(e,t)=>i(e)>(t||200)}},1871:function(e,t,i){const n=i(26),o=i(1872),a=i(1873),r=i(1874),{connectDomain:s}=i(17),{withIncognitoDetection:l}=i(182),d=s("user"),c=s("paywall"),p=n([d,s("payment"),c,l]);e.exports={PaywallCollaborator:p(o),withArticleTruncation:a,withGalleryTruncation:r}},1872:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(1),a=i(0),r=i(504),s=i(505),{trackComponent:l}=i(5),d=e=>{a.useEffect(()=>{l("PaywallCollaborator")},[]);const{component:t,name:i,paywall:o}=e,d=n(e,["component","name","paywall"]),c=r[o.strategy],p=o.strategy&&c,g=c&&c.names.includes(i);return p&&g?a.createElement(t,Object.assign({},s.execute(c,e))):a.createElement(t,Object.assign({},d))};d.propTypes={component:o.func.isRequired,name:o.string.isRequired,payment:o.object.isRequired,paywall:o.object.isRequired},e.exports=d},1873:function(e,t,i){const n=i(1),o=i(0);e.exports=(e,t)=>{const i=e.displayName||e.name,a=e=>"object"==typeof e&&"p"===e[0],r=(e,t)=>e.filter((i,n)=>((e,t)=>e.slice(0,t).filter(a).length)(e,n)<t),s=i=>{const{[t]:n,shouldTruncate:a,paywall:{gateway:s={},paragraphLimit:l}={}}=i,d=n&&(s.shouldTruncate||a)&&(s.paragraphLimit>=0||l>=0);return o.createElement(e,Object.assign({},i,{[t]:d?r(n,s.paragraphLimit||l):n}))};return s.propTypes={[t]:n.array.isRequired,paywall:n.shape({gateway:n.shape({paragraphLimit:n.number,shouldTruncate:n.bool}),paragraphLimit:n.number}),shouldTruncate:n.bool},s.displayName=`withArticleTruncation(${i})`,s}},1874:function(e,t,i){const n=i(1),o=i(0);e.exports=(e,t)=>{const i=e.displayName||e.name,a=(e,t)=>e.map(i=>i.filter(i=>((e,t)=>e.flat().indexOf(t))(e,i)<t)).filter((e,t)=>e.length>0||0===t),r=i=>{const{[t]:n,shouldTruncate:r,paywall:{gateway:s={},gallerySlideLimit:l}={}}=i,d=n&&(s.shouldTruncate||r)&&(s.gallerySlideLimit>=0||l>=0);return o.createElement(e,Object.assign({},i,{[t]:d?a(n,s.gallerySlideLimit||l):n}))};return r.propTypes={[t]:n.array.isRequired,paywall:n.shape({gateway:n.shape({gallerySlideLimit:n.number,shouldTruncate:n.bool}),gallerySlideLimit:n.number}).isRequired,shouldTruncate:n.bool},r.displayName=`withGalleryTruncation(${i})`,r}},1875:function(e,t,i){e.exports={BeopScript:i(1876)}},1876:function(e,t,i){const n=i(0),o=i(1),{trackComponent:a}=i(5),r=({accountId:e})=>(n.useEffect(()=>{a("BeopScript")},[]),n.createElement(n.Fragment,null,n.createElement("script",{id:"beop-script",type:"text/javascript",dangerouslySetInnerHTML:{__html:`window.beOpAsyncInit = function () {\n                      window.BeOpSDK.init({\n                        account: '${e}'\n                      });\n                      window.BeOpSDK.watch();\n                  };`}}),n.createElement("script",{id:"beop-sdk",async:!0,src:"https://widget.beop.io/sdk.js"})));r.propTypes={accountId:o.string.isRequired},e.exports=r},1877:function(e,t,i){e.exports=i(1878)},1878:function(e,t,i){const n=i(1681);e.exports=n},191:function(e,t,i){e.exports=i(237)},203:function(e,t,i){e.exports=i(263)},236:function(e,t,i){const{fetchWithTimeout:n}=i(50),{loadData:o}=i(262);e.exports={fetchWithTimeout:n,loadData:o}},237:function(e,t,i){const n=i(1),o=i(0),{useRef:a,useState:r}=i(0),{trackComponent:s}=i(5),{asThemedComponent:l}=i(35),d=i(30),{ToggleButton:c}=i(238),p=({analyticsDataAttribute:e,children:t,fullPageTheme:i,isChecked:n,onChange:l,redirectUrl:p,shouldDefaultChecked:g,shouldDisplaySingleChip:u,isAnchorUrl:m})=>{o.useEffect(()=>{s("ToggleChip")},[]);const{current:h}=a(void 0!==n),[y,b]=r(g),f=h?n:y,[C,v]=r(f);return o.createElement(c,Object.assign({},e,{as:p?"a":"button",href:p||void 0,role:"switch","aria-checked":u?C:f,onClick:()=>{let e,i;if(u?v(e=>(i=!e,!e)):e=!f,h||b(e),l){const t=new CustomEvent("change",{detail:{checked:i||e}});l(t)}if(m){const e="#"+t.toString().toLowerCase();window.history.replaceState(void 0,void 0,e)}},fullPageTheme:i}),u&&C&&o.createElement(d,null),t)};p.propTypes={analyticsDataAttribute:n.object,children:n.node.isRequired,fullPageTheme:n.oneOf(["standard","inverted"]),isAnchorUrl:n.bool,isChecked:n.bool,onChange:n.func,redirectUrl:n.string,shouldDefaultChecked:n.bool,shouldDisplaySingleChip:n.bool},p.defaultProps={isAnchorUrl:!1,isChecked:void 0,onChange:()=>{},shouldDefaultChecked:!1,shouldDisplaySingleChip:!1},e.exports=l(p)},238:function(e,t,i){const n=i(3).default,{calculateSpacing:o,getColorStyles:a,getColorToken:r,getTypographyStyles:s}=i(4),l=n.button.withConfig({displayName:"ToggleButton"})`
  border-radius: ${o(3)};
  cursor: pointer;
  padding: ${o(1)} ${o(3)};
  text-decoration: none;
  white-space: nowrap;

  .icon {
    ${({theme:e})=>a(e,"color","colors.interactive.base.black")};
    fill: ${r("colors.interactive.base.white")};
    margin-left: ${o(-2)};
    width: ${o(4)};
    height: ${o(2)};
    vertical-align: middle;

    &:hover {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.tags")};

  &[aria-checked='false'] {
    /* TODO support rgba in getColorStyles  */
    transition: background-color 0.25s, color 0.25s;
    background-color: rgba(
      ${r("colors.interactive.base.black",{rgbOnly:!0})},
      0.1
    );
    ${({theme:e})=>a(e,"color","colors.interactive.base.black")};
  }

  &[aria-checked='true'] {
    transition: background-color 0.25s, color 0.25s;
    text-decoration: none;
    ${({theme:e})=>a(e,"background-color","colors.interactive.base.black")};
    ${({theme:e})=>a(e,"color","colors.interactive.base.white")};

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  &:hover,
  &:focus {
    outline: 0;
    /* TODO support this in getColorStyles  */
    box-shadow: 0 0 0 1px ${r("colors.interactive.base.black")}
      inset;
    text-decoration: none;

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({fullPageTheme:e,theme:t})=>"inverted"===e?`\n\n      border: 1px solid;\n      ${a(t,"border-color","colors.discovery.body.white.border")};\n\n      &[aria-checked='false'] {\n        &:hover{\n          ${a(t,"background-color","colors.interactive.base.white")};\n          ${a(t,"color","colors.interactive.base.black")};\n        }\n        ${a(t,"background-color","colors.interactive.base.black")};\n        ${a(t,"color","colors.interactive.base.white")};\n      }\n\n      &[aria-checked='true'] {\n        ${a(t,"background-color","colors.interactive.base.white")};\n        ${a(t,"color","colors.interactive.base.black")};\n      }\n\n      &:hover,\n      &:focus {\n        box-shadow: none;\n      }\n    `:""}
`;e.exports={ToggleButton:l}},239:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(250);e.exports=n(o,"ToggleChipList")},244:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(0),a=i(1),r=e=>{var{fillColor:t="#000",width:i="100px",height:a="100px",margin:r="20px"}=e,s=n(e,["fillColor","width","height","margin"]);return o.createElement("svg",Object.assign({style:{width:i,height:a,margin:r,display:"inline-block"}},s,{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0"}),o.createElement("path",{fill:t,d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"},o.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})))};r.propTypes={fillColor:a.string,height:a.string,margin:a.string,width:a.string},e.exports=r},248:function(e,t,i){const n=i(0),{VogueWrapper:o}=i(249);e.exports=()=>n.createElement(o,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 36",textRendering:"geometricPrecision",shapeRendering:"geometricPrecision",className:"loader-vogue"},n.createElement("path",{id:"E",className:"st0",d:"M23.2612,0L23.2612,11.7649C23.2612,11.8148,23.0279,11.8315,23.0279,11.7649C23.0279,11.6982,23.2612,0.333282,12.7129,0.333282L8.76346,0.333282C8.54683,0.333282,8.41352,0.36661,8.41352,0.549915L8.41352,15.231C8.41352,15.3643,8.54683,15.4476,8.76346,15.4476L10.0799,15.4476C16.3456,15.4476,15.8457,9.14859,15.8457,9.08193C15.8457,9.01528,16.0957,9.03194,16.0957,9.08193C16.0957,9.13193,16.1123,22.2966,16.1123,22.3466C16.1123,22.3966,15.929,22.4132,15.929,22.3466C15.929,22.2799,15.779,15.7809,9.94661,15.7809L8.76346,15.7809C8.56349,15.7809,8.41352,15.8476,8.41352,15.9975L8.41352,31.7951C8.41352,31.9118,8.54683,32.0117,8.76346,32.0117C9.64666,32.0117,11.9296,32.0284,12.5629,32.0284C23.8945,32.0617,23.7445,19.8969,23.7445,19.8469C23.7445,19.797,24.0278,19.797,24.0278,19.8469L24.0278,32.445L0.114794,32.445C0.0481373,32.445,0.0481373,32.0951,0.114794,32.0951L2.49776,32.0951C2.71439,32.0951,2.84771,32.0284,2.84771,31.8784C2.84771,29.1455,2.84771,0.799877,2.84771,0.549915C2.84771,0.349946,2.58108,0.333282,2.49776,0.333282C2.46443,0.333282,1.23129,0.333282,0.0148091,0.333282C0.0148091,0.333282,-0.0685114,0.166641,0.0148091,0C0.0981296,0,23.2612,0,23.2612,0",opacity:"0",transform:"translate(4.15223,1.87884)",style:{animation:"E_o 1.5s linear infinite both"}}),n.createElement("path",{id:"U",className:"st0",d:"M27.1719,0.266719C25.7716,0.266719,24.3713,0.266719,24.3713,0.266719C24.3713,0.266719,24.0214,0.266719,24.0214,0.466748C24.0214,2.70041,24.0214,21.5031,24.0214,24.1868L24.0214,24.2034C24.038,30.8378,18.9372,33.0048,15.2701,33.0548L15.2701,33.0381C10.9528,33.0548,3.20169,32.338,3.20169,22.77C3.20169,22.77,3.18502,1.00016,3.16835,0.700115C3.15167,0.233381,2.55159,0.250051,2.55159,0.250051C2.55159,0.250051,0.10124,0.250051,0.017895,0.250051C-0.0654503,0.250051,-0.0487813,-0.1,0.017895,-0.1L11.9529,-0.1C12.0196,-0.1,12.003,0.250051,11.9529,0.250051C11.9029,0.250051,9.41925,0.250051,9.41925,0.250051C9.41925,0.250051,8.6358,0.216712,8.6358,0.733453C8.6358,1.46689,8.65246,25.0203,8.65246,25.8537C8.65246,29.5209,10.7361,32.7714,15.2534,32.7048C18.7873,32.638,23.6879,30.5711,23.6714,24.1868C23.6714,23.8701,23.6714,2.83376,23.6714,0.466748C23.6546,0.283389,23.3046,0.266719,23.3046,0.266719L19.9875,0.266719C19.9207,0.266719,19.9207,-0.0666619,20.004,-0.0666619C20.0208,-0.0666619,27.0885,-0.0666619,27.1719,-0.0666619C27.2385,0.100029,27.1719,0.266719,27.1719,0.266719Z",opacity:"0",transform:"translate(2.57354,1.9455)",style:{animation:"U_o 1.5s linear infinite both"}}),n.createElement("path",{id:"G",className:"st0",d:"M16.5382,19.9408L19.2012,19.9408C19.2012,19.9408,19.7005,19.8909,19.7005,20.124C19.7005,20.1406,19.7005,27.7636,19.7005,27.7636C19.7005,33.6389,13.8419,33.7056,12.1941,33.5224C6.06906,32.8233,5.95255,20.1905,5.91927,16.8784C5.83605,7.85727,7.2508,0.00125154,13.4091,0.317489C20.7159,0.683659,22.63,11.1694,22.7465,11.6355C22.9962,11.7187,22.9962,11.519,22.9962,11.519L23.0127,0.0844721C23.0127,0.0844721,22.9628,-0.0153926,22.813,0.11776C22.7631,0.167692,22.6965,0.23427,22.63,0.300845C19.401,3.59637,17.7866,0.134404,13.0762,-0.0153926C7.28409,-0.198477,0.0938322,7.82398,-0.00603238,17.0947C-0.105897,26.4154,6.01913,33.6056,12.7101,33.8554C16.3385,33.9885,16.2553,32.9898,20.7324,31.5917C23.4621,30.743,24.7604,32.5904,24.8602,33.356C25.0267,33.4725,25.0434,33.2727,25.0434,33.2727L25.0434,20.1739C25.0434,19.9077,25.4094,19.9576,25.4094,19.9576L27.8729,19.9576C27.9394,19.9576,27.9394,19.5914,27.8729,19.5914L16.5216,19.5914C16.4383,19.5914,16.4383,19.9408,16.5382,19.9408",opacity:"0",transform:"translate(2.19725,0.935133)",style:{animation:"G_o 1.5s linear infinite both"}}),n.createElement("path",{id:"O",className:"st0",d:"M5.92208,16.6329C5.92208,7.61677,7.65213,0.247436,14.0399,0.264071C20.9103,0.264071,22.2578,7.93283,22.2578,16.6496C22.2578,25.6659,20.9435,33.4346,14.09,33.4346C6.73721,33.4177,5.92208,26.115,5.92208,16.6329M13.9735,33.6839C20.7938,33.7005,28.1633,26.1649,28.18,16.8159C28.1965,7.01792,21.1101,0.0478142,14.09,-0.00209099C6.90356,-0.0686311,0,7.83302,0,16.8159C0,26.0983,6.52095,33.6507,13.9735,33.6839",opacity:"0",transform:"translate(2.065,1.05937)",style:{animation:"O_o 1.5s linear infinite both"}}),n.createElement("path",{id:"V",className:"st0",d:"M0.0178861,0L11.7176,0C11.7843,0,11.7676,0.349993,11.7176,0.349993L9.31769,0.349993C9.31769,0.349993,8.63437,0.31666,8.85104,0.699985C8.88437,0.783317,17.1175,23.2828,17.1175,23.2828C17.1175,23.2828,17.2675,23.6662,17.3842,23.7162C17.3842,23.7162,24.7007,1.11664,24.7007,1.09998C24.7674,0.883315,25.034,0.366659,24.584,0.366659L21.9341,0.366659C21.8841,0.366659,21.8841,0.0166663,21.9341,0.0166663L28.234,0.0166663C28.284,0.0166663,28.284,0.366659,28.234,0.366659L25.884,0.366659C25.234,0.349993,25.234,0.549989,25.1174,0.883315C25.0674,1.04998,14.9342,32.616,14.9342,32.616C14.9342,32.616,14.8842,32.4827,14.8509,32.3493C10.5677,19.9663,3.93447,2.73328,3.40115,0.883315C3.25115,0.333326,3.16782,0.349993,2.83449,0.349993C2.71783,0.349993,0.101218,0.349993,0.0178861,0.349993C-0.0654455,0.349993,-0.0487792,0,0.0178861,0",opacity:"0",transform:"translate(2.03854,1.8455)",style:{animation:"V_o 1.5s linear infinite both"}}))},249:function(e,t,i){const n=i(3).default.svg.withConfig({displayName:"VogueWrapper"})`
  animation: rotate 2s linear infinite;
  width: 36px;
  height: 32px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes E_o {
    0% {
      opacity: 0;
    }

    80.5556% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    83.3333% {
      opacity: 1;
    }

    97.2222% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes U_o {
    0% {
      opacity: 0;
    }

    63.8889% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    66.6667% {
      opacity: 1;
    }

    80.5556% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    83.3333% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes G_o {
    0% {
      opacity: 0;
    }

    47.2222% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    63.8889% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    66.6667% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes O_o {
    0% {
      opacity: 0;
    }

    30.5556% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    33.3333% {
      opacity: 1;
    }

    47.2222% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes V_o {
    0% {
      opacity: 0;
    }

    13.8889% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    16.6667% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 1;
    }

    30.5556% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    33.3333% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
`;e.exports={VogueWrapper:n}},250:function(e,t,i){const n=i(1),o=i(0),{ToggleChipListWrapper:a,LabelText:r,ListWrapper:s,ListItemWrapper:l,HelperText:d}=i(124),{trackComponent:c}=i(5),{asThemedComponent:p}=i(35),g=({label:e,children:t,contentAlign:i,fullPageTheme:n,hasNoHorizontalScroll:p,hasIncreasedBottomMargin:g,hasLargeLabel:u,hasToggleGridColor:m,helper:h,layout:y})=>(o.useEffect(()=>{c("ToggleChipList")},[]),o.createElement(a,{contentAlign:i,hasToggleGridColor:m},e&&o.createElement(r,{fullPageTheme:n,hasIncreasedBottomMargin:g,hasLargeLabel:u},e),o.createElement(s,{contentAlign:i,layout:y,hasNoHorizontalScroll:p,hasToggleGridColor:m,className:"list-wrapper"},o.Children.map(t,(e,t)=>e?o.createElement(l,{contentAlign:i,key:t,layout:y,className:"list-item-wrapper"},e):null)),h&&o.createElement(d,null,h)));g.propTypes={children:n.array.isRequired,contentAlign:n.oneOf(["left","center","right"]),fullPageTheme:n.oneOf(["standard","inverted"]),hasIncreasedBottomMargin:n.bool,hasLargeLabel:n.bool,hasNoHorizontalScroll:n.bool,hasToggleGridColor:n.bool,helper:n.string,label:n.string,layout:n.oneOf(["wrap","nowrap"])},g.defaultProps={contentAlign:"left",hasIncreasedBottomMargin:!1,hasLargeLabel:!1,hasNoHorizontalScroll:!1,layout:"wrap"},e.exports=p(g)},2555:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(i(2556));n(i(122)).default(o.default)},2556:function(e,t,i){const n=i(2557),{asConfiguredComponent:o}=i(9);e.exports=o(n,"ArticlePage")},2557:function(e,t,i){const n=i(8),o=i(125),a=i(15),r=i(45),s=i(1),l=i(0),{injectIntl:d}=i(2),c=i(2558).default,{I18nProvider:p}=i(520),g=i(1859),u=i(1512),m=i(2559),h=i(1864),{connector:y}=i(17),b=i(414),f=i(1387),{googleAnalytics:C}=i(12),v=i(19),{PaywallCollaborator:S,withArticleTruncation:w}=i(1871),{InlineBarrier:k}=i(61),x=i(2561),$=i(1588),T=i(142),{withLightbox:E}=i(698),N=i(58),{Disclaimer:L}=i(88),{BeopScript:I}=i(1875),{trackComponent:B}=i(5);const P=i(2565),A=i(257),R=i(1537),D=i(462),M=i(2569),{asConfiguredComponent:H}=i(9),O=i(488),_=i(1877),W=i(415),{getNewsletterSubscriptions:j}=i(489),{ArticlePageBase:G,ArticlePageGlobalStyle:F,ArticlePageLedeBackground:V,ArticlePageContentBackGround:U,ArticlePageBodyMobileTruncatedBtn:z,ArticlePageContentFooterGrid:q,ContentWrapperGrid:K}=i(1435),Y=i(1684),{MultiPackageRow:Z}=i(1541),{getOverrideBehaviour:X}=i(316);class J extends l.Component{constructor(e){super(e),this.onHandleScroll=()=>{const e=window.scrollY<=this.pageContentEl.current.offsetTop+100;e!==this.state.hideNav&&this.setState({hideNav:e})},this.onTruncationDismiss=()=>{this.setState({isMobileTruncated:!this.state.isMobileTruncated}),C.emitUniqueGoogleTrackingEvent("article-read-more")},this.fetchNewsletterSubscriptions=async e=>{try{const t=await j(e);if(200===t.status){const e=this.props.article.newsletterModules.filter(e=>e.priority).sort((e,t)=>e.priority-t.priority).map(e=>e.newsletterId),i=this.props.article.newsletter.newsletterId,n=t.newsletterSubscriptions.data.filter(e=>"SUBSCRIBED"===e.attributes.status).map(e=>e.attributes.newsletterId);if(n.length){const t=e.filter(e=>!n.includes(e)),o=this.props.article.newsletterModules.find(e=>e.newsletterId===t[0]);n.includes(i)&&this.setState({newsletterData:Object.assign(Object.assign({},this.state.newsletterData),o)})}}}catch(e){console.log(e)}return{}},this.state={hideNav:this.props.article.headerProps.hasContentHeaderLogo,isMobileTruncated:!1,newsletterData:this.props.article.newsletter},this.pageContentEl=l.createRef();const t=e.hasLightbox?E(h,e.article.lightboxImages,e.hasSlideShow):h;this.TruncatedChunkedArticleContent=w(t,"body")}componentDidMount(){var e;if(B("ArticlePage"),this.props.user.isAuthenticated&&this.props.hasDynamicNewsletterSignup&&(null===(e=this.props.article.newsletterModules)||void 0===e?void 0:e.length)){const e=this.props.article.newsletterModules.map(e=>e.newsletterId).toString(),t={amgUUID:this.props.user.amguuid,newsletterIds:e,userPlatformProxy:this.props.userPlatform.userPlatformProxy,provider:"sailthru",xClientID:this.props.userPlatform.xClientID};this.fetchNewsletterSubscriptions(t)}const{hasTruncationOnMobile:t}=this.props.article;if(t?this.setState({isMobileTruncated:!0}):this.setState({isMobileTruncated:!1}),this.props.article.headerProps.hasContentHeaderLogo){this.setState({hideNav:!0});const e=r(this.onHandleScroll,300);window.addEventListener("scroll",e)}const i="header"===a(this.props.article.interactiveOverride,"behavior"),n=a(this.props.componentConfig,"BasePage.settings.showNavWithHeaderOverride"),o=i&&!n;window.sessionStorage.setItem("nav_invisible",o)}componentWillUnmount(){window.removeEventListener("scroll",this.onHandleScroll),window.sessionStorage.removeItem("nav_invisible")}render(){const{article:{id:e,body:t,channelCloudData:i,contentWarnings:r,affiliateDisclaimer:s,hideAffiliateDisclaimer:d,hasAffiliateLinks:h,hideProductDisclaimer:y,channelMap:C,coralComments:w,hasNewsletterInBody:T,hasProduct:E,hasProductLisitingCarousel:B,hasTruncationOnMobile:j,headerProps:J,hideAutoDisclaimer:Q,hideContributorBio:ee,hideRecircList:te,hideRecircMostPopular:ie,hierarchy:ne,shouldReplaceOutbrainWithVMG:oe,interactiveOverride:ae,isAffiliateLinksDisabled:re,lang:se,langTranslations:le,recommended:de={},recircs:ce=[],recircMostPopular:pe,recircRelated:ge,relatedVideo:ue,interlude:me,isHeroAdVisible:he,isLicensedPartner:ye,licensedPartnerLink:be,magazineDisclaimer:fe,paddingTop:Ce,tagCloud:ve,newsletter:Se,shouldUsePersistentAd:we,showAgeGate:ke,showBookmark:xe,showBreadCrumb:$e,showHotelRecirc:Te,signageConfig:Ee,isLinkStackEnabled:Ne,shouldShowFooterNewsletter:Le,shouldPrioritizeSeriesPagination:Ie,savingsUnitedCoupons:Be=[]},showFirstRailRecirc:Pe,attributes:Ae,className:Re,componentConfig:De,shouldCenterDisclaimer:Me,shouldHideBaseTopPadding:He,shouldHideSeriesNavigation:Oe,shouldHideSeriesRecirc:_e,shouldInheritDropcapColor:We,featureFlags:je,hasLightbox:Ge,hasChannelNavigation:Fe,cartoonVariation:Ve,hasRecircDriver:Ue,linkList:ze,related:qe,metadataVideo:Ke,outbrain:Ye,taboola:Ze,productCarousel:Xe,user:Je,hasNewsletterForABTest:Qe,intl:et,xlargePaddingTop:tt,articleVariationForXlargePaddingTop:it,beOp:nt,hasDynamicDisclaimer:ot}=this.props,{hideNav:at}=this.state,rt=!!Qe||T,{hasContentHeaderLogo:st}=J;st&&(()=>{const e=a(De,"ContentHeader.settings");o(De,"ContentHeader.variation","TextOverlayWithLogo"),o(De,"ContentHeader.settings",Object.assign(Object.assign({},e),{showLogo:!0,hideContributors:!0,hidePublishDate:!0,hideRubric:!0,hideShareButtons:!0}))})();const lt=ee?void 0:J.contributors,{hasNativeShareButton:dt,hasNewsletterOnPageTop:ct,hasNewsletterWithoutWrapper:pt,shouldEnableNativeShareOnDesktop:gt,shouldRemoveBackgroundColor:ut}=je,mt=function(e){return"WithAdRail"===a(e,"ChunkedArticleContent.variation")?v.NarrowContentWithWideAdRail:v.WithMargins}(De),ht="OneColumnNarrow"===a(De,"ChunkedArticleContent.variation"),yt=v.DynamicGrid({startColumn:2,endColumn:12}),bt=Me?L.TextCenterNoTopRule:L,ft=ce.map((e,t)=>{const i=H(O,e.displayName),n=e.heading||"",{results:o,destinationPage:a,location:r,recommendedClickout:s,recommendedType:d}=e;return Ue&&a?l.createElement(_,{key:"SummaryCollectionSplitColumns"+t,recommendedItems:{items:o,recommendedType:d,recommendedClickout:s},guideItem:[a],location:r,shouldAppendReadMoreLinkForDek:!0}):l.createElement(W,{key:"ConnectedErrorBoundary"+t},l.createElement(i,{related:e.related,heading:n}))}),Ct=a(De,"ContentHeader.variation")===it&&tt?tt:Ce,vt=(null==nt?void 0:nt.accountID)||"",St=(null==nt?void 0:nt.isEnabled)||!1,wt=Fe&&l.createElement(A,null),kt="WithAdRail"===a(De,"ChunkedArticleContent.variation"),xt=({children:e})=>l.createElement(K,{isadRail:kt,as:mt},l.createElement("div",{className:"body body__container"},l.createElement("div",{className:"container container--body"},l.createElement("div",{className:"container--body-inner"},e)))),$t="articleheader"===X(ae),Tt=a(J,"sponsoredContentHeaderProps");return l.createElement(G,{additionalNavigation:wt,attributes:Ae,channelMap:C,className:n("page--article",Re),featureFlags:je,hideNav:at,hasContentHeaderLogo:st,hasFooterAdsMargins:!0,interactiveOverride:ae,isHeroAdVisible:he,hasBaseAds:!0,user:Je,lang:se,recommended:de,categoriesMap:null==ve?void 0:ve.tags,shouldHideBaseTopPadding:He,shouldPrioritizeSeriesPagination:Ie},St&&l.createElement(I,{accountId:vt}),l.createElement(p,{locale:se,translations:le},xe&&l.createElement(R,null),l.createElement(l.Fragment,null,h&&s&&!d&&!y&&l.createElement(N,null,l.createElement(yt,null,l.createElement(bt,{disclaimerHtml:s,hasTopRule:!1})))),ne&&ne.length>1&&$e&&l.createElement(u,{hierarchy:ne,shouldRemoveBackgroundColor:ut}),l.createElement("article",{className:n("article main-content",{"article--inherited-dropcaps":We}),lang:se},ct&&Se&&l.createElement(D,Object.assign({},Se,{position:"article-page-top"})),J.sponsoredContentHeaderProps&&l.createElement($,Object.assign({},J.sponsoredContentHeaderProps,{className:"light-theme"})),$t?l.createElement("div",{className:"interactive-override-container interactive-override-container--content_header",dangerouslySetInnerHTML:{__html:ae.markup}}):l.createElement(V,{ref:this.pageContentEl},l.createElement(f,Object.assign({},J,{hasNativeShareButton:dt,shouldEnableNativeShareOnDesktop:gt,className:"article__content-header",hasLightbox:Ge,stickySocialAnchorBottom:{selector:".content-bottom-anchor",edge:"bottom"},stickySocialAnchorTop:{selector:".body",edge:"top"},interactiveOverride:ae,metadataVideo:Ke,showBreadCrumb:$e}))),!Oe&&l.createElement(P,{className:"article__series-navigation"}),l.createElement(U,{togglePaddingTop:Ct,isMobileTruncated:this.state.isMobileTruncated,cartoonVariation:Ve,"data-attribute-verso-pattern":"article-body"},j&&this.state.isMobileTruncated&&l.createElement(z,{inputKind:"button",label:et.formatMessage(c.truncatedButtonLabel),onClickHandler:this.onTruncationDismiss}),a(De,"ChannelCloud.settings.shouldShowChannelCloud",!1)&&(null===(Et=null==i?void 0:i.channels)||void 0===Et?void 0:Et.length)>0&&l.createElement(v.ContentWithAdRailNarrow,null,l.createElement("div",null,l.createElement(M,Object.assign({},i,a(De,"ChannelCloud.settings"))))),t&&l.createElement(S,{body:t,component:this.TruncatedChunkedArticleContent,contributors:lt,hasProduct:E,hasProductLisitingCarousel:B,hasTopSpacing:!!J.lede,interlude:me,isAffiliateLinksDisabled:re,name:"chunked-article-content",shouldUsePersistentAd:we,hideRecircMostPopular:ie,recircMostPopular:pe,showFirstRailRecirc:Pe,hideAutoDisclaimer:Q,hideAffiliateDisclaimer:d,hideProductDisclaimer:y}),t&&l.createElement(xt,null,l.createElement(k,null))),!_e&&l.createElement(x,{ContentWrapper:mt})),St&&l.createElement(xt,null,l.createElement("div",{className:"BeOpWidget"})),Object.keys(Xe).length>0&&l.createElement(Z,{key:"articleCarouselProduct",dataJourneyHook:"row-content"},l.createElement(Y,Object.assign({},Xe,{copilotId:e}))),l.createElement(q,{as:b,className:n({"content-footer--mobile-truncated":this.state.isMobileTruncated}),channelMap:C,consumerMarketing:{position:"article-footer"},ContentWrapper:mt,contributors:lt,coralComments:w,hideContributorBio:ee,hideRecircList:te,hasNewsletterWithoutWrapper:pt,isLicensedPartner:ye,isLinkStackEnabled:Ne,isNarrow:ht,licensedPartnerLink:be,linkList:ze,magazineDisclaimer:fe,newsletter:Je.isAuthenticated?this.state.newsletterData:Se,outbrain:Ye,taboola:Ze,recircs:ce,recircListElements:ft,related:qe,recircRelated:ge,relatedVideo:ue,showNewsletter:Le||!rt,showHotelRecirc:Te,signageConfig:Ee,tagCloud:ve,shouldReplaceOutbrainWithVMG:oe,savingsUnitedCoupons:Be,sponsoredProps:Tt,hasDynamicDisclaimer:ot}),ke&&l.createElement(g,{content:{contentWarnings:r}}),!Je.isAuthenticated&&Je.hasUserAuthCheck&&l.createElement(m,{as:"document",hint:"prefetch",href:"/account/sign-in"})),l.createElement(F,null));var Et}}J.propTypes={article:s.shape({body:s.array,channelCloudData:s.object,affiliateDisclaimer:s.string,hideProductDisclaimer:s.bool,hideAffiliateDisclaimer:s.boolean,hasAffiliateLinks:s.boolean,channelMap:s.object,coralComments:s.shape({enableComments:s.bool,coralHostName:s.string}),contentWarnings:s.array,hasNewsletterInBody:s.bool,hasProduct:s.bool,hasProductLisitingCarousel:s.bool,hasTruncationOnMobile:s.bool,headerProps:s.object.isRequired,hideAutoDisclaimer:s.bool,hideContributorBio:s.bool,hideRecircList:s.bool,hideRecircMostPopular:s.bool,hierarchy:s.array,id:s.string,interactiveOverride:s.shape({markup:s.string,behavior:s.string}),interlude:s.shape(Object.assign(Object.assign({},T.propTypes),{isRailEligible:s.boolean})),isAffiliateLinksDisabled:s.bool,isHeroAdVisible:s.bool.isRequired,isLicensedPartner:s.bool,isLinkStackEnabled:s.bool,lang:s.string,langTranslations:s.object,licensedPartnerLink:s.string,lightboxImages:s.array.isRequired,magazineDisclaimer:s.shape({issueDate:s.string.isRequired,issueLink:s.string.isRequired,originalHed:s.string}),newsletter:s.object,newsletterModules:s.array,paddingTop:s.oneOf(["large"]),recommended:s.object,recircs:s.array,recircMostPopular:s.array,recircRelated:s.array,relatedVideo:s.shape({brand:s.string,related:s.any,useRelatedVideo:s.bool}),savingsUnitedCoupons:s.array,shouldPrioritizeSeriesPagination:s.bool,shouldShowFooterNewsletter:s.bool,shouldUsePersistentAd:s.bool,shouldReplaceOutbrainWithVMG:s.bool,showAgeGate:s.bool,showBookmark:s.bool,showBreadCrumb:s.bool,showHotelRecirc:s.bool,signageConfig:s.object,tagCloud:s.shape({tags:s.arrayOf(s.shape({tag:s.string.isRequired,url:s.string}))})}).isRequired,articleVariationForXlargePaddingTop:s.string,attributes:s.object,beOp:s.shape({accountID:s.string,isEnabled:s.boolean}),cartoonVariation:s.oneOf(["default","card"]),className:s.string,componentConfig:s.object,featureFlags:s.object,hasChannelNavigation:s.bool,hasDynamicDisclaimer:s.bool,hasDynamicNewsletterSignup:s.bool,hasLightbox:s.bool,hasNewsletterForABTest:s.bool,hasRecircDriver:s.bool,hasSlideShow:s.bool,hideNav:s.bool,intl:s.object,linkList:s.object,metadataVideo:s.shape({isLive:s.bool,premiereDate:s.string,series:s.string,videoLength:s.number,premiereGap:s.number}),outbrain:s.shape({canonicalUrl:s.string.isRequired,shouldDisplayAboveRecircList:s.bool,template:s.string.isRequired,widgetId:s.string}),productCarousel:s.object,related:s.array,shouldCenterDisclaimer:s.bool,shouldHideBaseTopPadding:s.bool,shouldHideSeriesNavigation:s.bool,shouldHideSeriesRecirc:s.bool,shouldInheritDropcapColor:s.bool,showFirstRailRecirc:s.bool,taboola:s.shape({publisherId:s.string.isRequired}),user:s.object,userPlatform:s.object,xlargePaddingTop:s.string},J.defaultProps={cartoonVariation:"default",hasDynamicNewsletterSignup:!1,hasLightbox:!1,hasSlideShow:!0,metadataVideo:{},productCarousel:{},related:[],shouldCenterDisclaimer:!1,shouldHideSeriesNavigation:!0,shouldHideSeriesRecirc:!0,shouldInheritDropcapColor:!1},J.displayName="ArticlePage",e.exports=y(d(J),{keysToPluck:["article","beOp","componentConfig","featureFlags","linkList","metadataVideo","outbrain","productCarousel","related","showFirstRailRecirc","taboola","user","userPlatform"]})},2558:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({truncatedButtonLabel:{id:"ArticlePage.TruncatedButtonLabel",defaultMessage:"Read Full Story",description:"ArticlePage component truncated button label"}})},2559:function(e,t,i){e.exports=i(2560)},256:function(e,t,i){const n=i(1386),o=i(15),a=e=>{const t=o(e,"gradient-style"),i=o(e,"color-stops");let n=o(e,"angle");"radial"===t&&(n=null);return`background: ${((e,t,i=null)=>null===i?`${e}-gradient(${t})`:`${e}-gradient(${i}, ${t})`)(t,i,n)}; position: sticky;`},r=e=>{const t=o(e,"url"),i=o(e,"repeat"),n=o(e,"color"),a=o(e,"attachment"),r=o(e,"size");return((e,t="no-repeat",i="center",n="cover",o="scroll",a="transparent")=>{let r,s="";if(null!==e&&(r=e),s=`background-image:${r};\n      background-attachment:${o};\n      background-color:${a};\n      background-repeat:${t};\n      background-position:${i};`,"string"==typeof n)s+=`background-size:${n};`;else{const e=[];n.forEach(t=>{e.push(t)}),s+=`background-size:${n.toString()};`}return s})(t,i,o(e,"position"),r,a,n)},s=e=>{return n(e,"gradient")?a(o(e,"gradient")):n(e,"image")?r(o(e,"image")):n(e,"solid")?(t=o(e,"solid"),`background-color:${o(t,"color")};`):"background: none;";var t};e.exports={getPattern:(e,t)=>{let i;if(!e||0===Object.keys(e).length||!t)return"background: none;";if(n(e,"container-styles")){const l=e["container-styles"];if(!l[t])return"background: none;";i=l[t];const d=n(i,"pattern")?i.pattern:null;if(d&&d.length){let e="";return d.length>=2?(d.forEach((t,i)=>{let s=i;if(n(t,"gradient"))e+=a(o(t,"gradient"));else if(n(t,"image")){let i="";o(t,"image").size&&(i=o(t,"url")),i.size?e+=`'url(${i})'`:s=d.length,r(o(t,"image"))}else if(n(t,"solid")){const i=o(t,"solid");i&&(e+=o(i,"color"))}s!==d.length-1&&(e+=",")}),e.toString()):s(d[0])}}return"background: none;"}}},2560:function(e,t,i){const n=i(0),{trackComponent:o}=i(5);class a extends n.PureComponent{constructor(){super(...arguments),this.writeResourceHintLink=e=>{const{as:t,hint:i,href:n}=e,o=document.createElement("link");o.as=t,o.href=n,o.rel=i,document.head.appendChild(o)}}componentDidMount(){o("ResourceHint"),this.props&&this.writeResourceHintLink(this.props)}render(){return n.createElement(n.Fragment,null)}}e.exports=a},2561:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(2562);e.exports=n(o,"SeriesRecirc")},2562:function(e,t,i){const n=i(1),o=i(0),{useIntl:a}=i(2),{useInView:r}=i(83),{connector:s}=i(17),l=i(11),d=i(19),c=i(2563).default,{trackComponent:p}=i(5),{googleAnalytics:g}=i(12),{SeriesRecircAsset:u,SeriesRecircContainer:m,SeriesRecircContent:h,SeriesRecircDek:y,SeriesPromoHed:b,SeriesRecircReadMoreCta:f,SeriesRecircReadMoreCtaMobile:C,SeriesRecircTextContainer:v}=i(2564),S={"Read more":c.readMoreDefault,"Read next":c.readNext},w=({ContentWrapper:e,readMoreCTA:t,seriesData:i})=>{const{formatMessage:n}=a();o.useEffect(()=>{p("SeriesRecirc")},[]);const s=(({links:e})=>{let t;for(let i=0;i<e.length;i++){const{isCurrent:n}=e[i];if(n){for(let n=i+1;n<e.length;n++){const{isExternal:i,isPublished:o}=e[n]||{};if(o&&!i){t=e[n];break}}break}}return t})({links:(null==i?void 0:i.links)||[]}),d=e=>{g.emitGoogleTrackingEvent("seriesrecirc",{title:e})},[c,w]=r();if(o.useEffect(()=>{w&&g.emitUniqueGoogleTrackingEvent("series-inview",{title:null==s?void 0:s.promoHed})},[w]),!i)return null;if(!s)return null;const{dek:k="",hed:x="",image:$=null,promoHed:T="",url:E=""}=s,N=$&&($.segmentedSources||$.sources)&&Object.assign({},$);return o.createElement(e,null,s&&o.createElement(m,{ref:c},o.createElement(h,null,o.createElement(C,null,n(S[t])),o.createElement(u,null,N&&o.createElement("a",{href:E,onClick:()=>d(T||x)},o.createElement(l,Object.assign({},N,{isLazy:!0})))),o.createElement(v,null,o.createElement(f,null,n(S[t])),(x||T)&&o.createElement(b,null,o.createElement("a",{href:E,onClick:()=>d(T||x)},o.createElement("span",{dangerouslySetInnerHTML:{__html:T||x}}))),k&&o.createElement(y,null,o.createElement("span",{dangerouslySetInnerHTML:{__html:k}}))))))};w.propTypes={ContentWrapper:n.elementType,readMoreCTA:n.string,seriesData:n.shape({hed:n.string,dek:n.string,image:n.object,links:n.arrayOf(n.shape({hed:n.string,dek:n.string,image:n.object,isCurrent:n.bool,isExternal:n.bool,isPublished:n.bool,promoDek:n.string,promoHed:n.string,url:n.string}))})},w.defaultProps={ContentWrapper:d.NarrowContentWithWideAdRail,readMoreCTA:"Read more",seriesData:null},w.displayName="SeriesRecirc",e.exports=s(w,{keysToPluck:["seriesData"]})},2563:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({readMoreDefault:{id:"ReadMore.SeriesRecirc",defaultMessage:"Read more",description:"SeriesRecirc component Read more text"},readNext:{id:"ReadNext.SeriesRecirc",defaultMessage:"Read next",description:"SeriesRecirc component Read next text"}})},2564:function(e,t,i){const n=i(3).default,{BaseText:o}=i(10),{calculateSpacing:a,getColorToken:r}=i(4),{BREAKPOINTS:s}=i(6),l=n.div.withConfig({displayName:"SeriesRecircAsset"})`
  grid-column: 1/5;

  @media (max-width: ${s.md}) {
    grid-column: 1/-1;
  }
`,d=n.div.withConfig({displayName:"SeriesRecircContainer"})`
  margin-top: ${a(4)};
  margin-bottom: ${a(5)};
  border-top: 2px solid
    ${({theme:e})=>r(e,"colors.discovery.body.white.heading")};
  padding-top: ${a(2)};
`,c=n.figure.withConfig({displayName:"SeriesRecircContent"})`
  margin-right: 0;
  margin-left: 0;

  @media (min-width: ${s.md}) {
    display: grid;
    grid-column-gap: ${a(3)};
    grid-template-columns: repeat(10, 1fr);
  }

  @media (max-width: ${s.md}) {
    display: block;
  }
`,p=n(o).withConfig({displayName:"SeriesRecircDek"})`
  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;p.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-embed"},p.displayName="SeriesRecircDek";const g=n(o).withConfig({displayName:"SeriesPromoHed"})`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${s.md}) {
    grid-column: 1/-1;
  }
`;g.defaultProps={as:"h2",bottomSpacing:.625,topSpacing:1,typeIdentity:"typography.definitions.discovery.subhed-section-tertiary"};const u=n(o).withConfig({displayName:"SeriesRecircReadMoreCta"})`
  @media (max-width: ${s.md}) {
    display: none;
  }
`;u.defaultProps={typeIdentity:"typography.definitions.discovery.subhed-section-primary"};const m=n(u).withConfig({displayName:"SeriesRecircReadMoreCtaMobile"})`
  display: none;

  @media (max-width: ${s.md}) {
    display: block;
    grid-column: 1/-1;
    margin-bottom: 1em;
  }
`,h=n.div.withConfig({displayName:"SeriesRecircTextContainer"})`
  @media (min-width: ${s.md}) {
    grid-column: 5/-1;
  }
`;e.exports={SeriesRecircAsset:l,SeriesRecircContainer:d,SeriesRecircContent:c,SeriesRecircDek:p,SeriesPromoHed:g,SeriesRecircReadMoreCta:u,SeriesRecircReadMoreCtaMobile:m,SeriesRecircTextContainer:h}},2565:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(2566);e.exports=n(o,"SeriesNavigation")},2566:function(e,t,i){const n=i(1),o=i(0),a=i(8),{useIntl:r}=i(2),{connector:s}=i(17),l=i(11),d=i(2567).default,{googleAnalytics:c}=i(12),{trackComponent:p}=i(5),{SeriesNavigationAsset:g,SeriesNavigationItemContainer:u,SeriesNavigationDek:m,SeriesNavigationHeadingContainer:h,SeriesNavigationHed:y,SeriesNavigationItemDek:b,SeriesNavigationItemHed:f,SeriesNavigationItemNowReading:C,SeriesNavigationList:v,SeriesNavigationListItem:S,SeriesNavigationResponsiveAssetComingSoonText:w,SeriesNavigationResponsiveAssetContainer:k,SeriesNavigationTextContainer:x,SeriesNavigationWrapper:$,UnpublishedResponsiveAssetContainer:T}=i(2568),E={"Coming soon":d.comingSoonText,"Now reading":d.nowReadingText},N=({comingSoonText:e,nowReadingText:t,links:i})=>{const{formatMessage:n}=r(),s=a("grid"),d=e=>{c.emitGoogleTrackingEvent("seriesnavigation",{title:e})};return i.length?o.createElement(v,{className:s},i.map((i={},a)=>{const r=a,{dek:s,hed:c,image:p,isCurrent:m,isExternal:h,isPublished:y,url:v}=i,$=!y&&!h,N=p&&(p.segmentedSources||p.sources);return o.createElement(S,{key:r},o.createElement(u,null,N&&o.createElement(g,{isComingSoon:$},o.createElement(k,{isComingSoon:$},$?o.createElement(o.Fragment,null,o.createElement(w,null,n(E[e])),o.createElement(T,null,o.createElement(l,Object.assign({},p,{isLazy:!0})))):o.createElement("a",{href:v,onClick:()=>d(c)},o.createElement(l,Object.assign({},p,{isLazy:!0}))))),o.createElement(x,null,c&&($?o.createElement(f,{isComingSoon:$,dangerouslySetInnerHTML:{__html:c}}):o.createElement(f,null,o.createElement("a",{href:v,dangerouslySetInnerHTML:{__html:c},onClick:()=>d(c)}))),!m&&s&&o.createElement(b,{isComingSoon:$,dangerouslySetInnerHTML:{__html:s}}),m&&o.createElement(C,{isCurrent:m,dangerouslySetInnerHTML:{__html:n(E[t])}}))))})):null};N.propTypes={comingSoonText:n.string,links:n.arrayOf(n.shape({dek:n.string,hed:n.string,isExternal:n.bool,url:n.string})),nowReadingText:n.string},N.defaultProps={links:[]};const L=({className:e,comingSoonText:t,nowReadingText:i,seriesData:n})=>{if(o.useEffect(()=>{p("SeriesNavigation")},[]),!n)return null;const{hed:r,dek:s,links:l}=n,d={comingSoonText:t,hed:r,dek:s,links:l,nowReadingText:i},c=a("grid",e);return o.createElement($,{className:c},o.createElement(h,null,r&&o.createElement(y,{dangerouslySetInnerHTML:{__html:r}}),s&&o.createElement(m,{dangerouslySetInnerHTML:{__html:s}})),o.createElement(N,Object.assign({},d)))};L.displayName="SeriesNavigation",L.propTypes={className:n.string,comingSoonText:n.string,nowReadingText:n.string,seriesData:n.shape({hed:n.string,dek:n.string,image:n.object,links:n.arrayOf(n.shape({hed:n.string,dek:n.string,image:n.object,isCurrent:n.bool,isExternal:n.bool,isPublished:n.bool,promoHed:n.string,url:n.string}))})},L.defaultProps={comingSoonText:"Coming soon",nowReadingText:"Now reading",seriesData:null},e.exports=s(L,{keysToPluck:["seriesData"]})},2567:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({comingSoonText:{id:"ComingSoon.SeriesNavigation",defaultMessage:"COMING SOON",description:"ChannelFilter component Coming Soon text"},nowReadingText:{id:"NowReading.SeriesNavigation",defaultMessage:"Now Reading",description:"SeriesNavigation component Now Reading text"}})},2568:function(e,t,i){const n=i(3).default,{applyGridSpacing:o,cssVariablesGrid:a}=i(16),{BaseText:r}=i(10),{calculateSpacing:s,getTypographyStyles:l,getColorStyles:d}=i(4),{BREAKPOINTS:c}=i(6),{universalGridCore:p}=i(56),g=n.div.withConfig({displayName:"SeriesNavigationAsset"})`
  ${({isComingSoon:e})=>e?"background: black;":""}
`,u=n.div.withConfig({displayName:"SeriesNavigationItemContainer"})`
  @media (max-width: ${c.md}) {
    width: ${s(22)};
  }
`,m=n.div.withConfig({displayName:"SeriesNavigationDek"})`
  ${({theme:e})=>l(e,"typography.definitions.discovery.description-page")};
`,h=n.div.withConfig({displayName:"SeriesNavigationHeadingContainer"})`
  grid-column: 1/-1;
  padding-top: ${s(2)};
`,y=n.h2.withConfig({displayName:"SeriesNavigationHed"})`
  ${({theme:e})=>l(e,"typography.definitions.discovery.hed-core-primary")};

  margin-top: 0;
  margin-bottom: ${s(.25)};
`,b=n(r).withConfig({displayName:"SeriesNavigationItemDek"})`
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-secondary")};
  ${({isComingSoon:e})=>e?"opacity: 43%":""}
`;b.defaultProps={isComingSoon:!1};const f=n(r).withConfig({displayName:"SeriesNavigationItemHed"})`
  ${({isComingSoon:e})=>e?"opacity: 43%;":""};

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;f.defaultProps={as:"h2",bottomSpacing:.6875,isComingSoon:!1,topSpacing:1,typeIdentity:"typography.definitions.discovery.hed-bulletin-primary"};const C=n(r).withConfig({displayName:"SeriesNavigationItemNowReading"})`
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-secondary")};

  ${({theme:e})=>d(e,"color","colors.interactive.base.invalid-primary")};
`,v=n.ul.withConfig({displayName:"SeriesNavigationList"})`
  grid-column: 1/-1;
  margin: 0;
  padding: 0 0 0.5rem 0;
  height: 100%;
  list-style: none;

  &.grid {
    ${p()}
  }
  @media (max-width: ${c.md}) {
    &.grid {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      padding: 0 0 1rem 0;
      width: 100%;
      overflow-x: scroll;
    }
  }
`,S=n.li.withConfig({displayName:"SeriesNavigationListItem"})`
  display: inline-block;
  grid-column: span 3;

  @media (max-width: ${c.md}) {
    &:last-child {
      padding-right: ${s(3)};
    }
  }

  @media (min-width: ${c.lg}) {
    grid-column: span 2;
  }
`,w=n.div.withConfig({displayName:"SeriesNavigationResponsiveAssetContainer"})`
  position: relative;
`,k=n(r).withConfig({displayName:"SeriesNavigationResponsiveAssetComingSoonText"})`
  position: absolute;
  top: ${s(1)};
  left: ${s(1.25)};
  z-index: 1;
`;k.defaultProps={as:"span",colorToken:"colors.background.adContainer.special",typeIdentity:"typography.definitions.discovery.subhed-section-secondary"};const x=n.div.withConfig({displayName:"SeriesNavigationWrapper"})`
  ${a()}
  ${o("padding")};

  grid-template-rows: auto auto;
  border-bottom: 1px solid;
  padding-bottom: ${s(1)};
  width: 100%;

  ${({theme:e})=>d(e,"border-color","colors.discovery.body.white.divider")};
  ${({theme:e})=>d(e,"background","colors.foundation.menu-bg.collapsed")};

  &.grid {
    ${p()}
  }
`,$=n.div.withConfig({displayName:"SeriesNavigationTextContainer"})`
  margin-top: ${s(2)};
`,T=n.div.withConfig({displayName:"UnpublishedResponsiveAssetContainer"})`
  opacity: 43%;
`;e.exports={SeriesNavigationAsset:g,SeriesNavigationItemContainer:u,SeriesNavigationDek:m,SeriesNavigationHeadingContainer:h,SeriesNavigationHed:y,SeriesNavigationItemDek:b,SeriesNavigationItemHed:f,SeriesNavigationItemNowReading:C,SeriesNavigationList:v,SeriesNavigationListItem:S,SeriesNavigationResponsiveAssetComingSoonText:k,SeriesNavigationResponsiveAssetContainer:w,SeriesNavigationTextContainer:$,SeriesNavigationWrapper:x,UnpublishedResponsiveAssetContainer:T}},2569:function(e,t,i){const n=i(1),o=i(0),{asConfiguredComponent:a}=i(9),{googleAnalytics:r}=i(12),{trackComponent:s}=i(5),{ChannelCloudContainer:l,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:p,ChannelCloudHeaderImage:g,ChannelCloudSubChannelContainer:u,ChannelCloudSubChannelLink:m,ChannelCloudSubChannelLinkText:h,ChannelCloudSubChannelText:y}=i(2570),b=({channels:e,headerLogo:t,headerLink:i,sectionHeader:n})=>(o.useEffect(()=>{s("ChannelCloud")},[]),o.createElement(d,null,n&&o.createElement(c,null,t&&o.createElement(g,{src:t,alt:"logo"}),o.createElement(p,{href:i,hasLogo:Boolean(t),dangerouslySetInnerHTML:{__html:n}})),e&&o.createElement(l,null,e.map(e=>o.createElement(u,{key:e.id},o.createElement(y,{dangerouslySetInnerHTML:{__html:e.text}}),e.sub.map(e=>o.createElement(m,{key:e.id,href:e.url,onClick:()=>r.emitGoogleTrackingEvent("channelCloud",e)},o.createElement(h,{dangerouslySetInnerHTML:{__html:e.text}}))))))));b.propTypes={channels:n.arrayOf(n.shape({id:n.string,text:n.string,originalText:n.string,sub:n.arrayOf(n.shape({id:n.string,text:n.string,url:n.string}))})).isRequired,headerLink:n.string,headerLogo:n.string,sectionHeader:n.string.isRequired},b.displayName="ChannelCloud",e.exports=a(b,"ChannelCloud")},257:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(258);e.exports=n(o,"ChannelNavigation")},2570:function(e,t,i){const n=i(3).default,{BaseText:o,BaseLink:a}=i(10),{calculateSpacing:r,getColorStyles:s}=i(4),l="\n  display: flex;\n  align-items: center;\n",d=n.div.withConfig({displayName:"ChannelCloudContainerWrapper"})``,c=n.div.withConfig({displayName:"ChannelCloudHeaderContainer"})`
  ${l};

  border-width: 0 0 ${r(.25)};
  border-style: solid;
  padding: ${r(1)} ${r(3)} ${r(2)}
    0;

  ${({theme:e})=>s(e,"border-color","colors.interactive.base.black")};
`,p=n.img.withConfig({displayName:"ChannelCloudHeaderImage"})`
  width: 25px;
  height: 30px;
`,g=n(a).withConfig({displayName:"ChannelCloudHeaderLink"})`
  position: relative;
  top: ${r(.3)};
  padding-left: ${({hasLogo:e})=>e?r(1.3):0};
`;g.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.discovery.hed-bulletin-secondary"};const u=n.div.withConfig({displayName:"ChannelCloudContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding: ${r(2.4)} ${r(6)}
    ${r(1)} 0;
`,m=n.div.withConfig({displayName:"ChannelCloudSubChannelContainer"})`
  ${l}
  flex-wrap: wrap;
  margin-bottom: ${r(2)};
  padding-right: ${r(2)};
`,h=n(o).withConfig({displayName:"ChannelCloudSubChannelText"})`
  padding-right: ${r(1)};

  &::after {
    content: ':';
  }
`;h.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const y=n(a).withConfig({displayName:"ChannelCloudSubChannelLink"})`
  ${l}
  padding-right: ${r(1)};

  svg {
    ${({theme:e})=>s(e,"fill","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    top: 2px;
    right: 2px;
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    vertical-align: bottom;
  }

  &::after {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    right: ${({hasIcon:e})=>e?r(.4):0};
    line-height: 0;
    content: ',';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`,b=n(o).withConfig({displayName:"ChannelCloudSubChannelLinkText"})`
  line-height: 1.7em;

  &:hover {
    ${({theme:e})=>s(e,"color","colors.consumption.body.standard.link-hover")};
    text-decoration: underline;
    ${({theme:e})=>s(e,"text-decoration-color","colors.consumption.body.standard.link-hover")};
  }
`;b.defaultProps={colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={ChannelCloudContainer:u,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:g,ChannelCloudHeaderImage:p,ChannelCloudSubChannelContainer:m,ChannelCloudSubChannelLink:y,ChannelCloudSubChannelLinkText:b,ChannelCloudSubChannelText:h}},258:function(e,t,i){const n=i(0),{useState:o,useRef:a,useEffect:r}=i(0),s=i(1),{useIntl:l}=i(2),d=i(45),c=i(259).default,{connector:p}=i(17),{trackComponent:g}=i(5),{googleAnalytics:u}=i(12),m=i(260),h=i(120),y=i(30),b=i(96),{INITIAL_STATE:f,computeScroll:C}=i(31),{ChannelNavigationWrapper:v,ChannelNavigationContainer:S,ChannelNavigationContent:w,ChannelNavigationLogoWrapper:k,ChannelNavigationLogo:x,ChannelNavigationScrollViewLogo:$,ChannelNavigationLinksWrapper:T,ChannelNavigationLinksList:E,ChannelNavigationLinkItem:N,ChannelNavigationLink:L,ChannelNavigationChannelDrawer:I,ChannelNavigationGroupedNavigation:B,ChannelNavigationGlobalDrawer:P,ChannelNavigationAccount:A,ChannelNavigationToggle:R,ChannelNavigationSecondaryMenu:D}=i(268),M=({accountProps:e,isFixed:t,logo:i,isAccountsEnabled:s,scrollViewLogo:p,channelNavigationLinks:M,channelNavigationLogoBaseUrl:H,overrideChannelNavigationLinks:O,secondaryMenuProps:_,showExternalProfileLink:W,loaderType:j,onNavigationLinkClick:G,activeLinkIndex:F,user:V,hideLinksOnMobile:U})=>{n.useEffect(()=>{g("ChannelNavigation")},[]);const[z,q]=o(!1),[K,Y]=n.useState(!1),[Z,X]=o(null),[J,Q]=o(f),ee=a(null),{formatMessage:te}=l(),ie=O||M;n.useEffect(()=>{const e=e=>{"Escape"===e.key&&K&&(u.emitGoogleTrackingEvent("hamburger-menu-"+(K?"collapsed":"expanded")),Y(!1))};return K&&window.addEventListener("keyup",e),()=>window.removeEventListener("keyup",e)},[K]);const ne=e=>{Q(e=>{var t,i;const n=C(e),o=(null===(t=null===document||void 0===document?void 0:document.body)||void 0===t?void 0:t.scrollHeight)-(null===(i=null===document||void 0===document?void 0:document.body)||void 0===i?void 0:i.clientHeight);return Object.assign(Object.assign({},n),{scrollHeight:o})}),e.preventDefault()};r(()=>{const e=d(ne,100);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[t]);const{direction:oe,pageYOffset:ae,scrollHeight:re}=J,se=K?y:b,le=t||ae>0,de=t||"up"!==oe&&ae>0||re===ae;return ie&&ie.length?n.createElement(v,{isFixed:le},n.createElement(S,{ref:ee,"data-testid":"channel-navigation"},n.createElement(w,{isFixed:le,isScrollingDown:de},i&&p&&n.createElement(k,{isFixed:le,isScrollingDown:de},n.createElement("a",{href:H},n.createElement(x,Object.assign({isScrollingDown:de},i)),de&&n.createElement($,Object.assign({isScrollingDown:de},p))))),n.createElement(T,{isScrollingDown:de,hideLinksOnMobile:U},n.createElement(E,{"data-journey-hook":"channel-navigation"},ie.map((e,t)=>{const i=void 0===F||t===F;return n.createElement(N,{key:e.key||e.type},n.createElement(L,{tabIndex:0,isActive:i,label:e.text,href:e.href,as:"a",isInline:!0,onClick:t=>{e.apiEndpoint&&(t.preventDefault(),q(!0),X(Object.assign({},e))),G&&G(e),u.emitGoogleTrackingEvent(e.analyticsEvent)}},e.text))}))),!s&&W&&n.createElement(A,{isScrollingDown:de,signInLabel:null==W?void 0:W.signInLabel,signInLink:null==W?void 0:W.signInLink,user:{isAuthenticated:!1}}),s&&V&&n.createElement(A,{isScrollingDown:de,accountLinks:e.accountLinks,savedStoriesLabel:null==e?void 0:e.savedStoriesLabel,accountBookmarkAlertLabel:null==e?void 0:e.accountBookmarkAlertLabel,accountLabel:null==e?void 0:e.accountLabel,signInLabel:null==e?void 0:e.signInLabel,signInLink:null==e?void 0:e.signInLink,signOutLink:null==e?void 0:e.signOutLink,user:V,className:"standard-navigation__section--utility-links-login"}),n.createElement(R,{tabIndex:0,isIconButton:!0,isScrollingDown:de,ButtonIcon:se,label:"Open Navigation Menu",onClickHandler:()=>{u.emitGoogleTrackingEvent("hamburger-menu-"+(K?"collapsed":"expanded")),Y(!K)},role:"button","aria-expanded":K})),!!Z&&n.createElement(I,{isOpen:z,onClose:()=>{q(!1)},contentLabel:te(c.channelDrawerContentLabel),showCloseButton:!0,className:"channel-navigation-drawer"},n.createElement(B,null,n.createElement(m,{storeKey:Z.key,dataUrl:Z.apiEndpoint,hasAtoZIndex:Z.hasAtoZIndex,loaderType:j,hasFilter:Z.hasFilter,filterLabel:Z.filterLabel}))),n.createElement(P,{isOpen:K,onClose:()=>Q(!K),contentLabel:"Navigation Menu"},n.createElement(D,{isFixed:le},!s&&W?n.createElement(h,Object.assign({},_,{user:{isAuthenticated:!1},isAccountsEnabled:!0,contentAlign:"center"})):n.createElement(h,Object.assign({accountProps:e},_,{user:V,isAccountsEnabled:s,contentAlign:"center"}))))):null},H=s.shape({text:s.string,key:s.string,apiEndpoint:s.string});M.defaultProps={accountProps:{accountLinks:[]},hideLinksOnMobile:!1,isAccountsEnabled:!1},M.propTypes={accountProps:s.object,activeLinkIndex:s.number,channelNavigationLinks:s.arrayOf(H),channelNavigationLogoBaseUrl:s.string,hideLinksOnMobile:s.bool,isAccountsEnabled:s.bool,isFixed:s.bool,loaderType:s.string,logo:s.object,onNavigationLinkClick:s.func,overrideChannelNavigationLinks:s.arrayOf(H),scrollViewLogo:s.object,secondaryMenuProps:s.object,showExternalProfileLink:s.object,user:s.shape({isAuthenticated:s.bool.isRequired})},M.displayName="ChannelNavigation",e.exports=p(M,{keysToPluck:["user","isAccountsEnabled","accountProps"]})},259:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({toggleLabel:{id:"ChannelNavigation.ToggleLabel",defaultMessage:"Open Navigation Menu",description:"ChannelNavigation component toggle label"},channelDrawerContentLabel:{id:"ChannelNavigation.ChannelDrawerContentLabel",defaultMessage:"Runway filters navigation",description:"ChannelNavigation component channel drawer content label"},globalDrawerContentLabel:{id:"ChannelNavigation.GlobalDrawerContentLabel",defaultMessage:"Navigation Menu",description:"ChannelNavigation component global drawer content label"}})},260:function(e,t,i){e.exports=i(261)},261:function(e,t,i){var n=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const o=i(1),a=i(0),{useState:r,useEffect:s}=i(0),{connect:l}=i(23),{loadData:d}=i(236),c=i(203),p=i(176),{LoaderWrapper:g}=i(267),u=i(105),{trackComponent:m}=i(5),h=e=>{var{dataUrl:t,storeKey:i,data:o,setData:l,loaderType:h="Circle"}=e,y=n(e,["dataUrl","storeKey","data","setData","loaderType"]);a.useEffect(()=>{m("GroupedNavigationContainer")},[]);const[b,f]=r(!1),[C,v]=r(!1),S=p[h];return s(()=>{!async function(){if(!o&&t){f(!0);try{const e=await d({url:""+t}),n=e?e[i]:[];l(i,n)}catch(e){v(!0)}finally{f(!1)}}}()},[t]),a.createElement(a.Fragment,null,C&&a.createElement(u.ContentCenterNoBackground,{ariaLive:"polite",className:"brand-background__lede",dangerousHed:"Oops",dangerousDek:"something went wrong"}),b&&a.createElement(g,null,a.createElement(S,null)),o&&a.createElement(c,Object.assign({groupedLinks:o},y)))};h.propTypes={analyticsEventForFilter:o.string,data:o.array,dataUrl:o.string.isRequired,filterLabel:o.string,hasAtoZIndex:o.bool,hasFilter:o.bool,loaderType:o.string,setData:o.func.isRequired,storeKey:o.string.isRequired},e.exports=l((e,{storeKey:t})=>{var i;return{data:(null===(i=e.groupedNavigation)||void 0===i?void 0:i[t])||null}},e=>({setData:(t,i)=>{e({type:"MERGE_KEY",key:"groupedNavigation",value:{[t]:i}})}}))(h)},262:function(e,t){e.exports={loadData:async function({url:e,gtmEvent:t=null}){window.dataLayer&&t&&window.dataLayer.push({event:t});const i=await fetch(e);if(i.ok)return i.json();throw new Error(i.statusText)}}},263:function(e,t,i){const n=i(1),o=i(0),{useIntl:a}=i(2),{useState:r}=i(0),s=i(126),l=i(79),d=i(66),{asConfiguredComponent:c}=i(9),{filter:p,useDebounce:g}=i(264),u=i(265),{trackComponent:m}=i(5),{GroupedNavigationWrapper:h,GroupedNavigationFilter:y,GroupedNavigationFilterContent:b,GroupedNavigationFilterInput:f,GroupedNavigationContent:C,GroupedNavigationLinks:v,GroupedNavigationGroup:S,GroupedNavigationIndex:w}=i(127),k=i(266).default,x=({className:e,groupedLinks:t,showContentDivider:i=!0,hasAtoZIndex:n=!1,hasFilter:c=!1,analyticsEventForFilter:x,filterLabel:$})=>{o.useEffect(()=>{m("GroupedNavigation")},[]);const{formatMessage:T}=a(),E=o.useRef(null),N=s(),[L,I]=r(""),[B,P]=g(t,200);return t&&t.length?o.createElement(h,{className:e,hasFilter:c,"data-testid":"GroupedNavigationWrapper"},c&&o.createElement(y,null,o.createElement(b,null,o.createElement(f,{placeholder:$,"aria-label":$||T(k.filterInputAriaLabelText),name:"filter",type:"text",onChange:e=>{const i=e.target.value;I(i),P(()=>p(t,i))},onFocus:()=>{x&&l.emitGoogleTrackingEvent(x)},value:L}),o.createElement(d,null))),o.createElement(C,{hasFilter:c},o.createElement(v,{ref:E},B.map(e=>{if(!e.links)return null;const t=e.links.map(e=>{const t=!0===e.isSecondary?"link--secondary":"link--primary";return Object.assign(Object.assign({},e),{className:t})}),a={};return n&&(a.id="#"===e.groupName?"other-"+N:`${e.groupName.toLowerCase()}-${N}`),o.createElement(S,{key:e.groupName,className:"grouped-navigation__group",links:t,linkClassName:"grouped-navigation__link",heading:e.groupName,showContentDivider:i,shouldStyleListItems:!0,attributes:a})})),n&&o.createElement(w,{className:"grouped-navigation__index"},o.createElement(u,{links:t,linksRef:E,navId:N})))):null},$=n.shape({text:n.string.isRequired,url:n.string.isRequired,isSecondary:n.bool,analyticsEvent:n.string}),T=n.arrayOf(n.shape({links:n.arrayOf($),groupName:n.string,groupId:n.string}));x.propTypes={analyticsEventForFilter:n.string,className:n.string,filterLabel:n.string,groupedLinks:T,hasAtoZIndex:n.bool,hasFilter:n.bool,showContentDivider:n.bool},x.displayName="GroupedNavigation",e.exports=c(x,"GroupedNavigation"),e.exports.groupedLinksShape=T},264:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.useDebounce=t.filter=void 0;const{useState:n,useCallback:o}=i(0),a=i(47);t.filter=(e,t)=>{if(!(null==t?void 0:t.trim()))return e;const i=e=>e.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/gi,"");return e.map(e=>{var n;return Object.assign(Object.assign({},e),{links:null===(n=e.links)||void 0===n?void 0:n.filter(e=>/(\s|')/.test(t)?i(e.text).includes(i(t)):e.text.match(/([a-zA-Z]\.){2,}/)?e.text.split(" ").filter(e=>i(e).startsWith(i(t))).length:e.text.split(/([ \-'’.]+)/).filter(e=>i(e).startsWith(i(t))).length)})}).filter(e=>{var t;return null===(t=e.links)||void 0===t?void 0:t.length})};t.useDebounce=(e,t)=>{const[i,r]=n(e),s=o(a(e=>{r(e)},t),[]);return[i,e=>{s(e)}]}},265:function(e,t,i){const n=i(1),o=i(0),{AtoZIndexWrapper:a,AtoZIndexList:r,AtoZIndexLink:s,AtoZIndexText:l}=i(127),d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],c=({links:e,linksRef:t,navId:i})=>{if(!e||!e.length)return null;const n=e=>{e.preventDefault();const i=window.requestAnimationFrame||(e=>window.setTimeout(e,20)),n=document.getElementById(e.target.hash.replace("#",""));if(!n)return;const{offsetTop:o}=n,{offsetTop:a,scrollTop:r}=t.current,s=o-a-r;let l=0;const d=()=>{l+=20;const e=function(e,t,i,n){let o=e;return o/=n/2,o<1?i/2*o*o+t:(o--,-i/2*(o*(o-2)-1)+t)}(l,r,s,600);t.current.scrollTop=e,l<600&&i(d)};d()};return o.createElement(a,{"data-testid":"AtoZIndexWrapper"},o.createElement(r,null,d.map(t=>{const a=e.find(e=>e.groupName===t);return a?o.createElement("li",{key:t},o.createElement(s,{"data-testid":"AtoZIndexLink",href:"#"+("#"===a.groupName?"other-"+i:`${a.groupName.toLowerCase()}-${i}`),onClick:n},t)):o.createElement(l,{key:t},t)})))};c.propTypes={links:n.arrayOf(n.shape({groupName:n.string.isRequired})),linksRef:n.object,navId:n.string},e.exports=c},266:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({filterInputAriaLabelText:{id:"GroupedNavigation.FilterInputAriaLabel",defaultMessage:"Filter links",description:"Grouped Navigation Filter component aria label text",isConfigurable:!0}})},267:function(e,t,i){const n=i(3).default,{calculateSpacing:o}=i(4),a=n.div.withConfig({displayName:"LoaderWrapper"})`
  padding-top: ${o(6)};
  text-align: center;
`;e.exports={LoaderWrapper:a}},268:function(e,t,i){const n=i(3).default,{calculateSpacing:o,getColorToken:a,getTypographyStyles:r,getZIndex:s}=i(4),{hideVisually:l}=i(51),{BREAKPOINTS:d,ZINDEX_MAP:c}=i(6),{maxThresholds:p}=i(18),g=i(14),u=i(81),m=i(57),h=i(19),y=i(161),{SecondaryMenuAccount:b}=i(160),{StandardNavigationDropdown:f,StandardNavigationAccountLabel:C,AccountDropdownToggleIcon:v}=i(82),{GridItem:S}=i(25),w=n.nav.withConfig({displayName:"ChannelNavigationWrapper"})`
  position: relative;
  z-index: ${c.persistentTopLayer};
  max-height: ${o(24)};
  ${({isFixed:e})=>e&&"\n      position: fixed;\n      top: 0;\n      right: 0;\n      left: 0;\n      "};
`;w.displayName="ChannelNavigationWrapper";const k=n.div.withConfig({displayName:"ChannelNavigationContainer"})`
  position: relative;
  border-bottom: 1px solid rgba(51, 51, 51, 1);

  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  @media (min-width: ${d.md}) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,x=n.div.withConfig({displayName:"ChannelNavigationContent"})`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  z-index: 1;
  margin: 0 auto;
  border-bottom: 1px solid
    ${({theme:e})=>a(e,"colors.consumption.lead.inverted.divider")};
  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  @media (min-width: ${d.md}) {
    flex-wrap: ${({isScrollingDown:e})=>e?"nowrap":"wrap"};
  }
`,$=n.div.withConfig({displayName:"ChannelNavigationLogoWrapper"})`
  margin: 0 auto;
  padding: ${o(1)};

  @media (min-width: ${d.md}) {
    ${({isScrollingDown:e})=>e?`\n      left: ${o(3)};\n      position: absolute;\n      padding: ${o(1)};\n    `:`padding: ${o(1)} 0;`}
  }
`,T=n(m).withConfig({displayName:"ChannelNavigationLogo"})`
  width: 96px;
  @media (min-width: ${d.md}) {
    display: flex;
    padding: ${o(1)} 0;
    width: 168px;
    height: 88px;
    ${({isScrollingDown:e})=>e&&`\n        ${l()}\n      `};
  }
`,E=n(m).withConfig({displayName:"ChannelNavigationScrollViewLogo"})`
  @media (max-width: ${d.md}) {
    ${l()}
  }
  padding: ${o(.5)} 0;
  width: 83px;
  height: unset;
`,N=n(h.NoMargins).withConfig({displayName:"ChannelNavigationLinksWrapper"})`
  > ${S} {
    grid-column: 1;
    margin: 0 auto;
    text-align: center;
    @media (min-width: ${d.md}) {
      grid-column: 2 / span 10;
    }
  }

  position: absolute;
  top: auto;
  transition: transform 0.5s ease-in-out;
  background: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  ${({isScrollingDown:e})=>e?"transform: translateY(-100%);":"transform: translateY(0%);"}

  @media (min-width: ${d.md}) {
    display: grid;
    position: initial;
    align-items: center;
    justify-content: center;
    transform: none;
    margin: 0 calculateSpacing(14.5);
    height: 64px;
  }

  @media (max-width: ${p.md}px) {
    ${({hideLinksOnMobile:e})=>e?l()+";":`padding: ${o(2)} 0 ${o(2)}\n      ${o(3)};\n      &::after {\n        background: linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.01) 31.25%,\n          ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")}\n            100%\n        );\n        content: '';\n        height: ${o(4)};\n        width: 48px;\n        bottom: ${o(2)};\n        right: 0;\n        position: sticky;\n        pointer-events: none;`}
  }
`,L=n.ul.withConfig({displayName:"ChannelNavigationLinksList"})`
  display: flex;
  margin: 0 auto;
  list-style: none;
  text-align: center;
  padding-inline-start: 0;

  @media (max-width: ${d.md}) {
    ${({hideLinksOnMobile:e})=>e?l()+";":""}
  }
`,I=n.li.withConfig({displayName:"ChannelNavigationLinkItem"})`
  padding-right: ${o(2)};

  &:last-child {
    padding-right: 0;
  }

  @media (min-width: ${d.md}) {
    margin-right: 0;
    padding-right: ${o(3)};
  }
`,B=n.a.withConfig({displayName:"ChannelNavigationLink"})`
  ${({theme:e})=>r(e,"typography.definitions.foundation.link-primary")}

  border: none;
  min-width: auto;
  text-decoration: none;
  white-space: nowrap;
  color: rgb(
    ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link",{rgbOnly:!0})},
    ${({isActive:e})=>e?"1":"0.6"}
  );

  &:hover {
    color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link-hover")};
  }
`,P=n(u.Right).withConfig({displayName:"ChannelNavigationChannelDrawer"})`
  @media (min-width: ${d.md}) {
    width: 400px;
    max-width: 400px;

    && {
      height: 100%;
    }
  }
`,A=n.div.withConfig({displayName:"ChannelNavigationGroupedNavigation"})`
  padding: 0 ${o(4)} ${o(2)};
  height: 100%;
`,R=n(u).withConfig({displayName:"ChannelNavigationGlobalDrawer"})`
  height: auto;
`,D=n(y).withConfig({displayName:"ChannelNavigationAccount"})`
  position: absolute;
  right: ${o(3)};
  border: none;
  background: transparent;
  padding: ${o(1)} ${o(1.5)};

  @media (max-width: ${d.md}) {
    display: none;
  }

  @media (min-width: ${d.md}) {
    left: inherit;
    padding: 0;
    min-width: auto;
  }

  &&&.standard-navigation-account {
    position: absolute;
    top: ${({isScrollingDown:e})=>o(e?1.4:14.4)};
    margin-right: ${o(3)};
    margin-left: ${o(1.5)};
    width: ${o(12)};
    height: ${o(6)};
    white-space: nowrap;
  }

  ${C} {
    justify-content: center;
    color: ${({theme:e})=>a(e,"colors.interactive.base.white")};

    &:hover,
    &:link,
    &:visited,
    &:active {
      color: ${({theme:e})=>a(e,"colors.interactive.base.white")};

      svg {
        path {
          fill: ${({theme:e})=>a(e,"colors.interactive.base.white")};
        }
      }
    }
  }

  .standard-navigation-account--icon,
  ${v} {
    margin-right: ${o(2)};
  }

  ${f} {
    top: ${o(6)};
    background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
    color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};

    &::before {
      border-color: black;
    }
  }

  ${f} .account-links__navigation {
    background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};

    .navigation__list-item {
      &:hover {
        background-color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.background")};
      }

      .navigation__link {
        ${({theme:e})=>r(e,"typography.definitions.foundation.link-secondary")};
        color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};
      }
    }
  }

  ${f}

  .account-links__sign-out {
    ${({theme:e})=>r(e,"typography.definitions.foundation.link-secondary")};
    color: ${a("colors.consumption.lead.inverted.link")};

    &:hover {
      background-color: ${a("colors.consumption.lead.standard.divider")};
      color: ${a("colors.consumption.lead.standard.link")};
    }
  }
`,M=n(g.Utility).withConfig({displayName:"ChannelNavigationToggle"})`
  position: absolute;
  top: 14px;
  right: ${o(2)};
  z-index: ${s("dropdown")};
  border: none;
  background: transparent;
  padding: ${o(1)} ${o(1.5)};
  width: ${o(4)};
  height: ${o(4)};
  @media (min-width: ${d.md}) {
    top: ${({isScrollingDown:e})=>e?o(2.5):"122px"};
    left: inherit;
    padding: 0;
    min-width: auto;
  }

  & > div {
    position: absolute;
  }

  path {
    fill: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link")};
  }

  &:focus {
    outline: 2px auto -webkit-focus-ring-color;
    border: unset;
    background: transparent;
  }

  &:hover {
    border-width: unset;
    border-style: none;
    border-color: transparent;
    background: transparent;

    path {
      fill: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.link-hover")};
    }
  }
`,H=n.div.withConfig({displayName:"ChannelNavigationSecondaryMenu"})`
  padding-top: ${({isFixed:e})=>e?0:"62px"};
  height: 100%;
  ${b} {
    display: block;
  }

  @media (min-width: ${d.md}) {
    padding-top: ${({isFixed:e})=>e?0:"160px"};
  }

  @media (min-width: ${d.lg}) {
    height: 100vh;
    ${b} {
      display: none;
    }
  }
`;e.exports={ChannelNavigationWrapper:w,ChannelNavigationContainer:k,ChannelNavigationContent:x,ChannelNavigationLogoWrapper:$,ChannelNavigationLogo:T,ChannelNavigationScrollViewLogo:E,ChannelNavigationLinksList:L,ChannelNavigationLinksWrapper:N,ChannelNavigationLinkItem:I,ChannelNavigationLink:B,ChannelNavigationChannelDrawer:P,ChannelNavigationGlobalDrawer:R,ChannelNavigationGroupedNavigation:A,ChannelNavigationAccount:D,ChannelNavigationToggle:M,ChannelNavigationSecondaryMenu:H}},269:function(e,t,i){const{default:n,css:o}=i(3),{BREAKPOINTS:a}=i(6),{SectionTitleHed:r}=i(91),{calculateSpacing:s,getColorToken:l,getLinkStyles:d,getTypographyStyles:c}=i(4),{BaseText:p}=i(10),g=o`
  border-top: 1px solid ${l("colors.discovery.body.white.border")};
  padding-top: ${s(6)};

  @media (min-width: ${a.lg}) {
    border-top: unset;
    padding-top: unset;
  }

  .summary-item__hed {
    ${c("typography.definitions.discovery.hed-core-primary")};
    @media (min-width: ${a.md}) {
      ${c("typography.definitions.discovery.hed-core-secondary")};
    }
  }
`,u=o`
  .summary-item--layout-proportions-33-66,
  .summary-item--layout-placement-side-by-side-desktop-only,
  .summary-item--layout-placement-side-by-side {
    .summary-item__hed {
      @media (min-width: ${a.md}) {
        ${c("typography.definitions.discovery.hed-core-primary")};
      }
    }
  }
`,m=n.div.withConfig({displayName:"SummaryListWrapper"})`
  .hide-river-ad .summary-list__item {
    display: none;
  }

  .show-river-ad {
    padding-bottom: ${s(4)};
  }

  .show-aside-ad .summary-list__item {
    display: block;
  }

  .summary-item--layout-placement-side-by-side-desktop-only,
  .summary-item--layout-placement-side-by-side {
    .summary-item__hed {
      @media (min-width: ${a.md}) {
        ${({theme:e})=>c(e,"typography.definitions.discovery.hed-feature")};
      }
    }
  }

  .summary-item--layout-placement-side-by-side-desktop-only.summary-item--bundle {
    .summary-item__hed,
    .summary-item__hed-link {
      ${({theme:e})=>c(e,"typography.definitions.consumptionEditorial.display-small")};
    }
  }

  ${({isCollection:e})=>e&&g};

  ${({withAside:e})=>e&&u};
`,h=n.div.withConfig({displayName:"SummaryListTitle"})`
  margin-bottom: ${s(5)};

  ${({isCollection:e,theme:t,hasSectionTitlePrimary:i})=>e?o`
        ${r} {
          ${c(t,i?"typography.definitions.discovery.subhed-section-primary":"typography.definitions.discovery.subhed-section-tertiary")}
          padding: ${s(2)} ${s(1)};
        }
      `:""}
`,y=n(p).withConfig({displayName:"SummaryListDangerousDek"})`
  margin-bottom: ${s(4)};
  text-align: center;
`;y.defaultProps={colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const b=n.div.withConfig({displayName:"SummaryListCallToActionWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
`,f=n.div.withConfig({displayName:"SummaryListFooterWrapper"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${s(4)};
  margin-bottom: ${s(4)};
  border-top: 1px solid ${l("colors.discovery.body.white.border")};

  a {
    padding: ${s(3)} 0 ${s(6)}
      ${s(4)};
    height: ${s(10.5)};
    ${({theme:e})=>d(e,"colors.consumption.lead.standard.link")};

    .button__icon-container {
      padding-left: ${s(.3)};

      .icon-arrow {
        width: 18px;
      }
    }
  }

  .button__label {
    ${({theme:e})=>c(e,"typography.definitions.foundation.link-secondary")};
  }
`,C=n.div.withConfig({displayName:"SummaryItemWrapper"})`
  && {
    ${({noClass:e})=>e&&`\n    \n    padding-bottom: ${s(4)};\n\n    &.summary-item--has-border {\n      margin-bottom: ${s(4)};\n    }\n\n    &.summary-item--card {\n      margin-bottom: ${s(4)};\n      padding: 0;\n    }\n\n    &:not(.summary-item--card) {\n      .summary-item__content {\n        padding-bottom: 0;\n      }\n    }\n  \n  `};

    ${({hasReducedMargin:e})=>e&&`\n      padding-bottom: ${s(4)};\n    `};
  }
`,v=n.button.withConfig({displayName:"SummaryListButton"})``,S=n.aside.withConfig({displayName:"SummaryListAside"})`
  ${({showRecircMostPopularInAsideWithRail:e})=>e&&"\n        width:300px;\n      "};
  height: 100%;
`;e.exports={SummaryListTitle:h,SummaryListDangerousDek:y,SummaryListCallToActionWrapper:b,SummaryListFooterWrapper:f,SummaryListWrapper:m,SummaryItemWrapper:C,SummaryListButton:v,SummaryListAside:S}},298:function(e,t,i){const{default:n}=i(3),{BaseLink:o}=i(10),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s,getLinkStyles:l}=i(4),{INTERACTIVE:d,BREAKPOINTS:c}=i(6),p=i(175),g=i(57),{applyMobileOnlyBorder:u}=i(255),m=n(p).withConfig({displayName:"RecircMostPopularWrapper"})`
  .hide-aside-ad .ad--aside {
    display: none;
  }

  .show-aside-ad .ad--aside {
    display: block;
  }

  width: 300px;

  @media (min-width: ${c.xl}) {
    width: 370px;
  }
`,h=n.div.withConfig({displayName:"RecircMostPopularContiner"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${a(2)} auto;
`,y=n.div.withConfig({displayName:"RecircMostPopularHeading"})`
  ${s("typography.definitions.discovery.subhed-section-tertiary")};
  margin: ${a(2)} 0 0;
  border-top: 2px solid ${r("colors.discovery.body.white.heading")};
  border-bottom: 2px solid
    ${r("colors.discovery.body.white.heading")};
  padding: ${a(2)} 0;

  ${({hasThinBorderHeading:e,theme:t})=>e&&`\n    border-top: 1px solid ${r(t,"colors.consumption.body.standard.divider")};\n    border-bottom: 1px solid ${r(t,"colors.consumption.body.standard.divider")};\n    padding: ${a(2)} 0;\n    `}

  ${({alignCenter:e})=>e&&"\n    text-align: center;\n  "}  
  ${({hasNoBorderHeading:e})=>e&&"\n    margin-top: 0;\n    border-top: none;\n    padding-top: 0;\n    "}
`,b=n(g).withConfig({displayName:"RecircMostPopularHeadingLogo"})`
  line-height: ${a(2)};
`,f=n.div.withConfig({displayName:"RecircMostPopularSummaryItem"})`
  && {
    grid-column-gap: ${a(3)};
    grid-template-columns: 75px auto;
    align-items: flex-start;
    padding: ${a(2)} 0;

    .rubric.summary-item__rubric {
      ${s("typography.definitions.globalEditorial.context-primary")};

      display: block;
      margin-bottom: ${a(1)};

      &:not(.rubric--with-bg) {
        color: ${r("colors.discovery.body.white.heading")};
      }
    }

    &.summary-item--has-border {
      border-top: 1px solid
        ${r("colors.discovery.body.white.border")};
      border-bottom: none;
    }

    .summary-item__content {
      padding: 0;
    }

    .summary-item__hed {
      ${s("typography.definitions.discovery.hed-bulletin-primary")};
      transition: color ${d.timingLinkDefault} ease;
      margin-bottom: ${a(1)};
    }

    .summary-item__byline {
      margin-bottom: 0;
    }

    .summary-item__byline-authors {
      &.byline,
      &.byline__preamble,
      &.byline__name,
      &.byline__name-link,
      &.byline__social-link {
        ${s("typography.definitions.globalEditorial.accreditation-core")};
        color: ${r("colors.discovery.body.white.heading")};
      }
    }
    ${u}
  }
`,C=n.ul.withConfig({displayName:"RecircMostPopularItems"})`
  margin: 0;
  padding: 0;
  list-style-type: decimal;

  ${({unmarked:e})=>e&&"list-style: none;"}

  li:first-of-type .summary-item--has-border:first-of-type {
    border: none;
  }

  ${({hasListNumberBySummary:e})=>e&&`\n        clear: both;\n        margin-left: ${a(2)};\n        padding-top: ${a(1)};\n        list-style: none;\n    \n        .rubric.summary-item__rubric {\n            margin-bottom: ${a(.5)};\n            margin-left: ${a(2)};\n        }\n    \n        ${f} {\n            margin-left: ${a(-4)};\n            padding: ${a(2)} 0;\n        }\n    \n        .summary-item {\n            margin-left: ${a(2)};\n            padding-top: 0;\n        }\n    \n        .summary-item__hed {\n            margin-bottom: ${a(.5)};\n        }\n    \n        .summary-item__content {\n            padding-top: 0;\n        }\n    \n        li {\n            display: block;\n            position: relative;\n            counter-increment: inst;\n        }\n    \n        li::before {\n            position: absolute;\n            margin-left: ${a(-2)};\n            padding-top: ${a(4)};\n            content: counter(inst) '. ';\n        }\n    `}

  ${({hasDiscoveryBodyNumbers:e,theme:t})=>e&&`\n      li::before {\n        color: ${r(t,"colors.discovery.body.white.heading")};\n        content: counter(inst) '. ';\n      }\n    `}
`,v=n.div.withConfig({displayName:"RecircMostPopularFooter"})`
  border-top: 1px solid ${r("colors.discovery.body.white.border")};
  padding-top: ${a(1)};
`,S=n(o).withConfig({displayName:"RecircMostPopularFooterLink"})`
  ${s("typography.definitions.foundation.link-primary")};
  ${({theme:e})=>l(e,"colors.foundation.collapsed-menu.utility-link.default","colors.foundation.collapsed-menu.utility-link.hover","navigation")};
`;e.exports={RecircMostPopularWrapper:m,RecircMostPopularContiner:h,RecircMostPopularHeading:y,RecircMostPopularHeadingLogo:b,RecircMostPopularItems:C,RecircMostPopularFooter:v,RecircMostPopularFooterLink:S,RecircMostPopularSummaryItem:f}},443:function(e,t,i){const n=i(3).default,o=i(14),{CaptionWrapper:a,CaptionText:r}=i(59),{calculateSpacing:s,getColorToken:l,getLinkStyles:d}=i(4),c=i(428),{BREAKPOINTS:p}=i(6),{ResponsiveImageContainer:g}=i(27),u=n.div.withConfig({displayName:"LightboxWrapper"})`
  grid-column-start: main;
`,m=n(c).withConfig({displayName:"LightboxSwipe"})`
  display: flex;
  width: 100%;
  height: 100%;
`,h=n(o.Utility).withConfig({displayName:"LightboxCloseButtonIcon"})`
  position: fixed;
  top: ${s(.5)};
  right: ${s(.5)};
  z-index: 1;
  cursor: pointer;
  padding: 8px;
  line-height: 0;

  &.listicle-variation-close {
    top: 1px;
  }

  &,
  &:hover {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  &:focus {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  .icon {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.dark")};
  }

  .icon:hover {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  @media (min-width: ${p.md}) {
    top: ${s(2)};
    right: ${s(2)};
  }
`,y=n.div.withConfig({displayName:"LightboxSlidesWrapper"})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: transform 0.4s ease-in-out;
  height: 100%;

  &.listicle-variation-slide-wrapper {
    display: block;
  }
`,b=n.div.withConfig({displayName:"LightboxSlideTopSpacer"})``,f=n.div.withConfig({displayName:"LightboxSlideImageCaptionOuter"})``,C=n.div.withConfig({displayName:"LightboxSlideCaptionContainer"})``,v=n.div.withConfig({displayName:"LightboxSlideWrapper"})`
  background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
  width: 100vw;

  &.listicle-variation-slide {
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    padding: ${s(3)} ${s(9)};

    ${a} {
      margin-bottom: 0;
      background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    }
  }

  ${a} {
    background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
    text-align: initial;

    ${r} {
      ${({theme:e})=>d(e,"colors.consumption.lead.standard.description",null)}

      &:hover {
        text-decoration: none;
      }
    }
  }

  ${({screenOrientation:e})=>"landscape"===e||"portrait"===e||"square"===e?`\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: auto;\n\n    ${f} {\n      display: contents;\n    }\n\n    .responsive-image {\n      display: flex;\n      flex-direction: column;\n\n      ${g} {\n        max-height: 85vh;\n        object-fit: contain;\n      }\n    }\n\n    ${C} {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n\n    ${a} {\n      margin: ${s(2)} ${s(2)} ${s(5)};\n    }\n\n    @media (min-width: ${p.md}) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: ${s(4)};\n      height: initial;\n\n      ${b} {\n        display: none;\n      }\n\n      ${f} {\n        display: block;\n      }\n\n      .responsive-asset {\n        display: table-cell;\n      }\n\n      ${C} {\n        display: table-caption;\n        caption-side: bottom;\n      }\n\n      ${a} {\n        margin: 0;\n        margin-top: ${s(1)};\n      }\n    }\n\n    ${"portrait"===e?`\n      @media (min-width: ${p.lg}) {\n        display: flex;\n        flex-direction: row;\n        height: 100%;\n\n        ${b} {\n          display: none;\n        }\n\n        ${f} {\n          display: contents;\n        }\n\n        .responsive-asset {\n          display: flex;\n          height: 100%;\n\n          .responsive-image {\n            height: 100%;\n\n            ${g} {\n              height: 100%;\n              max-height: initial;\n            }\n          }\n        }\n\n        ${C} {\n          display: flex;\n          flex-direction: column;\n          align-self: flex-end;\n        }\n\n        ${a} {\n          margin: 0;\n          margin-bottom: ${s(6)};\n          margin-left: ${s(2)};\n          max-width: 180px;\n        }\n      }\n    `:""}\n  `:""}
`;e.exports={LightboxSwipe:m,LightboxCloseButtonIcon:h,LightboxSlideImageCaptionOuter:f,LightboxSlideCaptionContainer:C,LightboxWrapper:u,LightboxSlideTopSpacer:b,LightboxSlidesWrapper:y,LightboxSlideWrapper:v}},444:function(e,t,i){const n=i(1),o=i(0),{ContentHeaderBylines:a}=i(201),r=({bylineVariation:e,contributors:t})=>t&&0!==Object.keys(t).length?o.createElement(a,{contributors:t,bylineVariation:e,isCompact:!1}):null;r.propTypes={bylineVariation:n.string,contributors:n.object},e.exports=r},445:function(e,t,i){const n=i(1),o=i(0),{ContentHeaderTitleBlockPublishDate:a}=i(157),r=({hasExtraSpaceBetweenSeparator:e,hidePublishDate:t,publishDate:i})=>t||!i?null:o.createElement(a,{hasExtraSpaceBetweenSeparator:e,"data-testid":"ContentHeaderPublishDate"},i);r.propTypes={hasExtraSpaceBetweenSeparator:n.bool,hidePublishDate:n.bool,publishDate:n.string},e.exports=r},446:function(e,t,i){const n=i(1),o=i(0),a=i(1357),r=({hasCategoryEyebrow:e,tags:t,title:i})=>e&&(null==t?void 0:t.length)>0?o.createElement(a,{title:i,tags:t}):null;r.propTypes={hasCategoryEyebrow:n.bool,tags:n.array,title:n.string},e.exports=r},447:function(e,t){e.exports=e=>{if(!window)return{};const{bottom:t,left:i,right:n,top:o}=e.getBoundingClientRect(),a=e.currentStyle||window.getComputedStyle(e);return{bottom:t+parseFloat(a.marginBottom),left:i-parseFloat(a.marginLeft),right:n+parseFloat(a.marginRight),top:o-parseFloat(a.marginTop)}}},448:function(e,t,i){const n=i(1),o=i(0),{SponsorContentContainer:a,SponsorImage:r,SponsoredContent:s,SponsoredContentCampaignLink:l}=i(1365),d=i(11),c=({sponsorByline:e,sponsoredContentHeaderProps:t,theme:i})=>{const{sponsorLogo:n,sponsorName:d,campaignUrl:c}=t;if(!d||!e)return null;const p=`${e} ${d}`;return o.createElement(a,null,o.createElement(l,{additionalRelVals:["sponsored"],href:c},o.createElement(r,Object.assign({},n)),o.createElement(s,{containerTheme:i},p)))};c.propTypes={sponsorByline:n.string,sponsoredContentHeaderProps:n.shape({campaignUrl:n.string,sponsorLogo:n.shape(d.propTypes),sponsorName:n.string}),theme:n.oneOf(["standard","inverted","special"])},c.defaultProps={theme:"inverted"},e.exports=c},449:function(e,t,i){const n=i(3).default,{getColorToken:o,getTypographyStyles:a,calculateSpacing:r,maxScreen:s}=i(4),{SocialIconsList:l}=i(32),{BREAKPOINTS:d}=i(6),{BaseText:c,BaseLink:p}=i(10),{SITE_HEADER_TOP_HEIGHT:g,SITE_HEADER_TOP_STICKY_HEIGHT_MD:u,SITE_HEADER_TOP_STICKY_HEIGHT_LG:m}=i(153),h=i(19),{GridItem:y}=i(25),{universalGridCore:b}=i(56),{applyGridSpacing:f}=i(16),C=i(11),v=n.header.withConfig({displayName:"TextOverlayWrapper"})`
  overflow: hidden;
`,S=n.div.withConfig({displayName:"ImageWrapper"})`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: ${({contentAlign:e})=>e};

  @media (orientation: landscape) {
    display: grid;
    min-height: 400px;
  }

  @media (max-width: ${d.md}) {
    display: grid;
    min-height: 667px;
  }

  @media (min-width: ${d.md}) {
    display: grid;
    height: calc(
      100vh - ${g} - ${u}
    );
  }

  @media (min-width: ${d.lg}) {
    display: grid;
    height: calc(
      100vh - ${g} - ${m}
    );
  }

  @media (min-width: ${d.xl}) {
    display: grid;
    min-height: 720px;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({background:e})=>"gradient"===e?"linear-gradient(to top, rgb(0, 0, 0) 0, transparent 65%)":"rgba(0, 0, 0, 0.65)"};
    content: '';
    pointer-events: none;
  }
`,w=n.div.withConfig({displayName:"Image"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .responsive-asset {
    &::before {
      display: block;
      width: 100%;
      content: '';
    }
  }

  > *,
  picture,
  .responsive-asset picture, /* set to override the css specifity set on this component  */
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`,k=n.div.withConfig({displayName:"ContentAlign"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({contentAlign:e})=>e};
  width: 100%;

  > .social-icons--footer {
    ${l} {
      @media (min-width: ${d.md}) {
        position: relative; /* for bookmark onboarding alert placement */
      }
    }
  }

  ${({socialIconsToHide:e})=>e&&`\n      ${s(d.lg)} {\n        ${(e=>e.map(e=>`\n        .social-icons__list-item--${e} {\n          display: none;\n        }\n    `).join("\n"))(e)}\n      }\n    `}

  ${({bottomSpacing:e})=>e&&"margin-bottom: "+r(e)}
`,x=n.div.withConfig({displayName:"Content"})`
  position: relative;
  z-index: 2;
`,$=n(c).withConfig({displayName:"Hed"})`
  text-align: ${({contentAlign:e})=>e};
`;$.defaultProps={as:"h1",colorToken:"colors.consumption.lead.inverted.heading",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.hed-standard"};const T=n("div").withConfig({displayName:"DekAndCaption"})`
  ${b()}
  ${f("padding")}
  ${({isInverted:e,theme:t})=>e&&`\n      background: ${o(t,"colors.background.dark")};\n    `}
`,E=n.div.withConfig({displayName:"DekWrapper"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${d.md}) {
    grid-column: 3 / span 8;
  }
`,N=n(c).withConfig({displayName:"Dek"})`
  ${({isInverted:e,theme:t})=>e&&`\n    color: ${o(t,"colors.consumption.lead.inverted.description")};\n    `}
  text-align: ${({contentAlign:e})=>e};
`;N.defaultProps={as:"p",bottomSpacing:4,colorToken:"colors.consumption.lead.standard.description",topSpacing:3,typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const L=n(c).withConfig({displayName:"Figure"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${d.md}) {
    grid-column: 1 / span 12;
  }
`;L.defaultProps={as:"figure",colorToken:"colors.consumption.lead.standard.description",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.description-embed"};const I=n.span.withConfig({displayName:"ContentDivider"})`
  display: block;
  margin-top: ${r(4)};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme:e})=>o(e,"colors.consumption.lead.standard.accent")};
  width: 100px;
  ${({contentAlign:e})=>"center"===e&&`margin: ${r(4)} auto 0`}
`,B=n.div.withConfig({displayName:"ContributorImage"})`
  display: block;
  margin-top: ${r(4)};
  border-radius: 50%;
  min-width: 60px;
  max-width: 66px;
  min-height: 60px;
  max-height: 66px;
  overflow: hidden;
  ${({contentAlign:e})=>"center"===e&&`margin: ${r(4)} auto 0`}
`,P=n.div.withConfig({displayName:"Accreditation"})`
  ${({contentAlign:e})=>"center"===e?`margin: ${r(2)} auto`:`margin: ${r(2)} 0`}
`,A=n.time.withConfig({displayName:"PublishDate"})`
  ${({theme:e})=>a(e,"typography.definitions.globalEditorial.accreditation-core")}
  display: block;
  margin: ${r(1)} 0 ${r(4)};
  text-align: ${({contentAlign:e})=>e};
  color: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.context-tertiary")};
`,R=n(h.WithMargins).withConfig({displayName:"ContentGrid"})`
  > ${y} {
    grid-column: 1 / span 4;
    @media (min-width: ${d.md}) {
      grid-column: ${({contentAlign:e})=>"left"===e?"1 / span 10":"2 / span 10"};
    }
  }
`,D=n(C).withConfig({displayName:"TextOverlayLogoImage"})`
  grid-column: 1 / span 4;

  img {
    max-width: 100%;
    height: 100px;
    vertical-align: bottom;
  }
`,M=n(p).withConfig({displayName:"TextOverlayLogoLink"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${r(2)};

  @media (max-width: ${d.md}) {
    padding-right: calc(1 * ${r(3)});
    padding-left: calc(1 * ${r(3)});
  }
`,H=n.div.withConfig({displayName:"TextOverlayLogo"})`
  margin: auto;
  margin-top: 1.5rem;
`;e.exports={TextOverlayLogo:H,TextOverlayLogoLink:M,TextOverlayLogoImage:D,TextOverlayWrapper:v,ImageWrapper:S,Image:w,ContentAlign:k,Content:x,Hed:$,DekAndCaption:T,DekWrapper:E,Dek:N,Figure:L,ContentDivider:I,ContributorImage:B,Accreditation:P,PublishDate:A,ContentGrid:R}},450:function(e,t,i){const{default:n}=i(3),{BaseText:o}=i(10),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=i(4),l=n.div.withConfig({displayName:"ScoreBoxWrapper"})`
  position: relative;
  width: 130px;
`,d=n.div.withConfig({displayName:"ScoreCircle"})`
  position: relative;
  margin-bottom: ${a(2)};
  border: 7px solid
    ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  border-radius: 50%;
  padding-bottom: ${a(2)};
  width: 134px;
  height: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,c=n(o).withConfig({displayName:"Rating"})`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  ${s("typography.definitions.globalEditorial.numerical-large")};
`,p=n(o).withConfig({displayName:"BestNewMusicText"})`
  ${s("typography.definitions.globalEditorial.context-primary")};
  width: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,g=n.svg.withConfig({displayName:"SvgStyle"})`
  margin-bottom: ${a(2,"px")};
  margin-left: ${a(3,"px")};
  width: 86px;
  height: 26px;
`,u=n.div.withConfig({displayName:"SvgWrapper"})`
  svg {
    fill: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  }
  line-height: 0em;
`;e.exports={BestNewMusicText:p,Rating:c,ScoreBoxWrapper:l,ScoreCircle:d,SvgStyle:g,SvgWrapper:u}},456:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.envConfigFromWorkflow=t.Env=void 0;var n=i(457);Object.defineProperty(t,"Env",{enumerable:!0,get:function(){return n.Env}}),Object.defineProperty(t,"envConfigFromWorkflow",{enumerable:!0,get:function(){return n.envConfigFromWorkflow}})},457:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.envConfigFromWorkflow=t.Env=void 0,function(e){e.production="production",e.staging="staging"}(t.Env||(t.Env={}));t.envConfigFromWorkflow=(e,t)=>t[e.env]},469:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(521);e.exports=n(o,"BlockquoteEmbed")},470:function(e,t,i){const n=i(471),{asConfiguredComponent:o}=i(9);e.exports=o(n,"RecircMostPopular")},471:function(e,t,i){const{asVariation:n}=i(13),o=i(472);o.MainPattern=n(o,"MainPattern",{hasListNumber:!1}),o.NumberedList=n(o,"NumberedList",{hasListNumber:!0}),o.NumberedListBySummary=n(o,"NumberedListBySummary",{hasListNumber:!0,hasListNumberBySummary:!0}),e.exports=o},472:function(e,t,i){const n=i(8),o=i(0),{useIntl:a}=i(2),r=i(1),{connector:s}=i(17),l=i(38),{googleAnalytics:d}=i(12),c=i(44),{PaymentGateway:p}=i(24),g=i(37),{useOnAdFilled:u}=i(72),m=i(473).default,{getTitle:h}=i(283),{trackComponent:y}=i(5),{RecircMostPopularWrapper:b,RecircMostPopularContiner:f,RecircMostPopularHeading:C,RecircMostPopularHeadingLogo:v,RecircMostPopularItems:S,RecircMostPopularFooter:w,RecircMostPopularFooterLink:k,RecircMostPopularSummaryItem:x}=i(298),$={},T=e=>{o.useEffect(()=>{y("RecircMostPopular",e.variations)},[]);const{applicationID:t,bylineVariation:i,categories:r,contentTypes:s,excludeCategories:T,hasAd:E,hasDiscoveryBodyNumbers:N,hasNoBorderHeading:L,hasRubricHeading:I,hasRule:B,hasThinBorderHeading:P,shouldHideRubric:A,hideSummaryItemBorder:R,isVisible:D,items:M,landingPageLink:H,adPosition:O,numberOfDays:_,onIntersectionViewportCallback:W,pageSize:j,recommended:G,renditions:F,seriesLogos:V,seriesLogoToUse:U,sidebarSectionTitle:z,strategy:q,useTrailingSlash:K,variations:{hasListNumber:Y,hasListNumberBySummary:Z}}=e,{formatMessage:X}=a(),[J]=o.useState(()=>(e=>{const t=e||"default",i=$[t]||0;return $[t]=i+1,$[t]})(t)),[Q,ee]=o.useState(!1),[te,ie]=o.useState(!1),ne=o.useMemo(()=>({instance:{instance:J}}),[J]);o.useEffect(()=>{te&&M.length>0&&!Q&&(d.emitUniqueGoogleTrackingEvent("recirc-most_popular-impression",ne),ee(!0))},[Q,te,M,ne]);const[,oe,ae]=u("aside-ad");if(!D)return null;const re=Y?l.TextBelowLeft:l.SideBySideThirds,se=M.map((e,t)=>{return o.createElement("li",{key:e.url},I&&o.createElement(c.Item,Object.assign({},e.rubric,{className:"summary-item__rubric"})),o.createElement(x,{bylineVariation:i,clickHandler:(n=e.url,()=>{d.emitGoogleTrackingEvent("recirc-most_popular-click",Object.assign(Object.assign({},ne),{"gtm.elementUrl":n}))}),contentType:e.contentType,contributors:e.contributors,dangerousHed:e.dangerousHed,hasBorder:!R,hasRule:B,hedTag:"div",image:Y?null:e.image,maxHedLines:3,recircId:t+1,rubric:A?null:e.rubric,url:e.url,as:re}));var n}),le=o.createElement("li",{key:"aside"},o.createElement(p,{group:"ads"},o.createElement(x,{position:"aside",onFilled:ae,hasMobileOnlyBorder:!R,as:g})));if(M.length&&E){const e=O-1>=0?O-1:0;se.splice(e,0,le)}const de=H&&H.url&&H.label,ce=V&&V[U],pe=h(X(m.sectionTitle),G,M);return o.createElement(b,{onIntersectionViewport:(e,i)=>{e&&(W({applicationID:t,categories:r,contentTypes:s,excludeCategories:T,numberOfDays:_,pageSize:j,renditions:F,strategy:q,useTrailingSlash:K,recommended:G}),ie(!0),i(),window&&window.cnBus&&window.cnBus.emit&&window.cnBus.emit(`aside${J}.componentDidUpdate`))},observerOptions:{rootMargin:"300px"},className:"recirc-most-popular-wrapper"},se.length>0&&o.createElement(f,{className:n("recirc-most-popular-sparrow-tracking",oe),"data-most-popular-id":"mod-most-popular-"+J},o.createElement(C,{hasThinBorderHeading:P,hasNoBorderHeading:L,alignCenter:pe!==X(m.sectionTitle)},ce?o.createElement(v,Object.assign({},ce)):z||pe),o.createElement(S,{unmarked:!Y,hasListNumberBySummary:Z,hasDiscoveryBodyNumbers:N},se),o.createElement(w,null,de&&o.createElement(k,{href:H.url},H.label))))};T.propTypes={adPosition:r.number,applicationID:r.string,bylineVariation:r.string,categories:r.array,contentTypes:r.string,excludeCategories:r.array,hasAd:r.bool,hasDiscoveryBodyNumbers:r.bool,hasNoBorderHeading:r.bool,hasRubricHeading:r.bool,hasRule:r.bool,hasThinBorderHeading:r.bool,hideSummaryItemBorder:r.bool,isVisible:r.bool,items:r.arrayOf(r.shape(l.SideBySideThirds.PropTypes)),landingPageLink:r.object,numberOfDays:r.number,onIntersectionViewportCallback:r.func,pageSize:r.number,recommended:r.object,renditions:r.object,seriesLogos:r.object,seriesLogoToUse:r.string,shouldHideRubric:r.bool,sidebarSectionTitle:r.string,strategy:r.string,useTrailingSlash:r.bool,variations:r.shape({hasListNumber:r.bool,hasListNumberBySummary:r.bool})},T.defaultProps={adPosition:99,hasAd:!0,hasDiscoveryBodyNumbers:!1,hasNoBorderHeading:!1,hasRubricHeading:!1,hasRule:!1,hasThinBorderHeading:!1,hideSummaryItemBorder:!1,isVisible:!0,items:[],shouldHideRubric:!1,variations:{hasListNumber:!1,hasListNumberBySummary:!1}},T.displayName="RecircMostPopular",e.exports=s(T,{keysToPluck:["renditions","seriesLogos","landingPageLink","useTrailingSlash"]})},473:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(2);t.default=n.defineMessages({sectionTitle:{id:"RecircMostPopular.SectionTitle",defaultMessage:"Most Popular",description:"Section title for most popular recirculation items"}})},485:function(e,t,i){e.exports=i(499)},491:function(e,t,i){const{default:n}=i(3),o=i(37),{BREAKPOINTS:a,GRID_GAP:r}=i(6),{applyGridSpacing:s,cssVariablesGrid:l}=i(16),{calculateSpacing:d,minMaxScreen:c,getColorToken:p,minScreen:g}=i(4),{SummaryListWrapper:u}=i(269),m=n.div.withConfig({displayName:"SummaryRiverWrapper"})`
  ${l()}

  ${({isFullBleedMobile:e})=>e&&`\n        ${u} {\n            ${c(0,a.md)} {\n              padding: 0;\n            }\n        }\n    `};
  ${({gridColSpanValue:e,showRecircMostPopularInAsideWithRail:t})=>e>=1&&t?`\n            @media (min-width: ${a.lg}) {\n                .summary-list .grid-layout__content {\n                  grid-column: span ${e};\n                }\n              }\n            `:""}

  ${({topSpacingInRem:e})=>e?`\n        ${g(a.md)} {\n          margin-top: ${d(e)};\n        }\n      `:""}
`,h=n(o).withConfig({displayName:"SummaryRiverAd"})`
  margin-bottom: ${d(4)};
`,y=n.div.withConfig({displayName:"SummaryRiverTitleWrapper"})`
  ${s("padding")}
  ${({hasScrollOffset:e})=>e?`scroll-margin-top: ${d(8)};`:""}

  margin-bottom: ${d(4)};

  ${({hasExtraTitlePadding:e})=>e?`\n      @media (min-width: ${a.xxl}) {\n        padding-left: calc(2.5 * var(--grid-margin));\n        padding-right: calc(2.5 * var(--grid-margin));\n      }\n      `:""}

  ${({hasDividerAbove:e})=>e?"":`margin-top: ${d(2)};`}
`,b=n.section.withConfig({displayName:"SummaryRiverSection"})``,f=n.div.withConfig({displayName:"SummaryRiverList"})`
  ${({hasRule:e,theme:t})=>e?`\n        &::before {\n          border-top: 1px solid ${p(t,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${d(5-r.md)};\n        }\n      `:""}
`;e.exports={SummaryRiverList:f,SummaryRiverWrapper:m,SummaryRiverAd:h,SummaryRiverSection:b,SummaryRiverTitleWrapper:y}},499:function(e,t,i){const n=i(8),o=i(1),a=i(0),{default:r}=i(162),{trackComponent:s}=i(5),{processLinks:l,processCeros:d,processTiktok:c,processSidebarHeadings:p}=i(282),g=i(469),u=i(271),{BodyWrapper:m}=i(166),h=new r({a:l,blockquote:({props:e})=>({type:g,props:e}),ceros:d,h2:p,tiktok:c,"inline-embed":u}),y=({body:e,className:t,children:i,shouldDisableMaxWidth:o,shouldEnableDataJourneyHook:r=!0})=>{a.useEffect(()=>{s("Body")},[]);const l={className:n("body",t),shouldDisableMaxWidth:o};return r&&(l["data-journey-hook"]="client-content"),a.createElement(m,Object.assign({},l,{"data-testid":"BodyWrapper"}),i||h.convert(e))};y.propTypes={body:o.array,children:o.node,className:o.string,shouldDisableMaxWidth:o.bool,shouldEnableDataJourneyHook:o.bool},y.defaultProps={body:["div"],shouldDisableMaxWidth:!1},e.exports=y},521:function(e,t,i){const n=i(1),o=i(0),a=i(8),{BlockquoteEmbedWrapper:r,BlockquoteEmbedContent:s,BlockquoteEmbedFooter:l,BlockquoteEmbedCite:d}=i(313),{trackComponent:c}=i(5),p=({attributes:e,children:t,citeUrl:i,className:n,dangerousAttribution:p,hasParagraphMargin:g,hasSmallMargins:u,hasTopBorder:m})=>(o.useEffect(()=>{c("BlockquoteEmbed")},[]),o.createElement(r,Object.assign({},e,{cite:i,hasTopBorder:m,hasSmallMargins:u,className:a(n,"blockquote-embed")}),o.createElement(s,{hasParagraphMargin:g,className:"blockquote-embed__content"},t),p&&o.createElement(l,null,o.createElement(d,{dangerouslySetInnerHTML:{__html:p}}))));p.propTypes={attributes:n.object,children:n.oneOfType([n.arrayOf(n.node),n.node]).isRequired,citeUrl:n.string,className:n.string,dangerousAttribution:n.string,hasParagraphMargin:n.bool,hasSmallMargins:n.bool,hasTopBorder:n.bool},p.defaultProps={hasSmallMargins:!1,hasTopBorder:!0},p.displayName="BlockquoteEmbed",e.exports=p},522:function(e,t,i){const n=i(1),o=i(0),{InfoSliceValue:a,InfoSliceKey:r,InfoSliceItem:s,InfoSliceListItem:l,InfoSliceList:d,InfoSliceWrapper:c}=i(523),{trackComponent:p}=i(5),g=({className:e,items:t,isMusicReview:i})=>(o.useEffect(()=>{p("InfoSlice")},[]),t&&0!==t.length?o.createElement(c,{className:e},o.createElement(d,{isMusicReview:i},t.map(e=>{const{key:t,value:i}=e;return t&&i?o.createElement(l,{key:t.toString().toLowerCase()},o.createElement(s,null,o.createElement(r,null,t),o.createElement(a,null,i))):null}))):null);g.propTypes={className:n.string,isMusicReview:n.bool,items:n.arrayOf(n.shape({key:n.string,value:n.string}))},g.defaultProps={isMusicReview:!1},e.exports=g},523:function(e,t,i){const n=i(3).default,{calculateSpacing:o,getColorStyles:a}=i(4),{BaseText:r}=i(10),{BREAKPOINTS:s}=i(6),{maxThresholds:l}=i(18),d=n(r).withConfig({displayName:"InfoSliceValue"})`
  display: table-cell;
  vertical-align: top;
`;d.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const c=n(r).withConfig({displayName:"InfoSliceKey"})`
  display: table-cell;
  padding-right: ${o(1)};
  vertical-align: top;
`;c.defaultProps={colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.globalEditorial.context-title"};const p=n.div.withConfig({displayName:"InfoSliceItem"})`
  display: table;
  align-items: center;
  padding: ${o(.5)} 0;
`,g=n.li.withConfig({displayName:"InfoSliceListItem"})`
  @media (max-width: ${l.md}px) {
    margin: 0 auto;
  }
  @media (min-width: ${s.md}) {
    margin-right: ${o(3)};

    :last-child {
      margin-right: ${o(0)};
    }
  }
`,u=n.ul.withConfig({displayName:"InfoSliceList"})`
  display: flex;
  flex-direction: column;
  margin: 0;
  border-width: 2px 0 0;
  border-style: solid;
  ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
  padding: ${o(1.5)} 0;
  list-style: none;

  @media (min-width: ${s.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    ${({isMusicReview:e})=>e&&"\n    justify-content: center;\n    border-width: 0 0 0;"}
  }
  ${({isMusicReview:e})=>e&&"\n  justify-content: center;\n  border-width: 0 0 0;"}
`,m=n.div.withConfig({displayName:"InfoSliceWrapper"})``;e.exports={InfoSliceValue:d,InfoSliceKey:c,InfoSliceItem:p,InfoSliceListItem:g,InfoSliceList:u,InfoSliceWrapper:m}},65:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(119);e.exports=n(o,"BasePage")},698:function(e,t,i){e.exports=i(1351)},699:function(e,t,i){const{asConfiguredComponent:n}=i(9),o=i(1362);e.exports=n(o,"ReviewRatingData")},700:function(e,t,i){e.exports=i(522)},95:function(e,t,i){const{default:n,css:o}=i(3),{calculateSpacing:a,getColorStyles:r,getTypographyStyles:s}=i(4),{BaseText:l}=i(10),{BREAKPOINTS:d}=i(6),c=i(11),p=n.header.withConfig({displayName:"UtilityLedeHeader"})`
  ${({contentAlign:e})=>e?(e=>`\n  text-align: ${e};\n`)(e):""}
  ${({theme:e,hasBackground:t})=>t?(e=>`\n  ${r(e,"background-color","colors.discovery.body.white.background")};\n`)(e):""}
  ${({hasImage:e})=>e?`\n      display: grid;\n      grid-template-columns: repeat(8, 1fr);\n      grid-column-gap: 1.5rem;\n      align-items: center;\n      padding: ${a(12)} 0 ${a(100)} 0;\n      @media  (min-width: 0) and (max-width: ${d.md}){\n          grid-gap: ${a(2)};\n          grid-template-columns: repeat(4, 1fr);\n          padding: ${a(5)} 0 ${a(5)} 0;\n          justify-items: center;\n      }\n      `:""}
  ${({alternativeStyle:e})=>e?`\n    grid-gap: ${a(2)} 0;\n    @media (min-width: 0) and (max-width: ${d.md}){\n      grid-gap: ${a(4)} 0;\n    }\n    `:""}
`,g=n.div.withConfig({displayName:"UtilityLedeWrapper"})`
  grid-auto-flow: row;
  grid-column: 4 / span 5;

  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-gap: ${a(2)} 0;
    grid-column: 1 / span 4;
  }

  ${e=>!0===e.alternativeStyle?`\n        grid-gap: ${a(2)} 0;\n        @media (min-width: 0) and (max-width: ${d.md}){\n            grid-gap: ${a(4)} 0;\n        }\n        `:""}
`,u=n(l).withConfig({displayName:"UtilityLedeHedText"})`
  ${e=>!0===e.alternativeStyle?`\n        ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.hed")};\n        ${({theme:e})=>s(e,"typography.definitions.discovery.page-hed-section")};\n        `:""}
  ${e=>!0===e.hasImage?"\n        margin: 0;\n        ":`margin: 0 0 ${a(2,"px")};`}

  ${e=>!0===e.hasInverted&&o`
      ${({theme:e})=>r(e,"color","colors.discovery.body.white.context-texture")};
      ${({theme:e})=>s(e,"typography.definitions.discovery.hed-core-primary")};
      line-height: 25px;
      font-size: 20px;
    `}
`;u.defaultProps={as:"h1",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.hed-break-out"};const m=n(l).withConfig({displayName:"UtilityLedeDekText"})`
  a {
    ${({theme:e})=>r(e,"color","colors.discovery.body.white.accent")};
  }

  p {
    margin: 0; /* overwrite native browser margins for paragraph tags */
  }
  ${e=>!0===e.alternativeStyle?`\n        ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.description")};\n        ${({theme:e})=>s(e,"typography.definitions.discovery.description.feature")};\n        a {\n          ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.description")};\n        }\n        `:""}

  ${e=>!0===e.hasImage?"\n        margin: 0;\n        ":`margin: ${a(2,"px")} 0 0;`}

  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-row: 2;
  }
`;m.defaultProps={as:"h2",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const h=n(c).withConfig({displayName:"UtilityLedeImage"})`
  grid-column: 1 / span 3;
  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-column: 2 / span 2;
    grid-row: 1;
  }
  ${e=>!0===e.hasImage?`\n      @media (min-width: 0) and (max-width: ${d.md}){\n        padding-bottom: 0;\n      }\n      `:""}
`;e.exports={UtilityLedeHeader:p,UtilityLedeWrapper:g,UtilityLedeHedText:u,UtilityLedeDekText:m,UtilityLedeImage:h}}});