import { useLocalStorage } from '@rehooks/local-storage';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import styleImgCSS from './img/css.png';
import codeImg from './img/jsx.png';
import styleImgSass from './img/sass.png';
import { LocalStorage } from './types';
import { DemoTabProps } from './types.public';

const localStorageKey = 'react-demo-tab';

export const DemoTab = ({ code, style, codeExt = 'jsx', styleExt = 'css', children }: DemoTabProps) => {
  const [tabIndex, setTabIndex] = useLocalStorage<LocalStorage>(localStorageKey, { mainTabIndex: 0, codeTabIndex: 0 });

  const styleImg = styleExt === 'css' ? styleImgCSS : styleImgSass;

  return (
    <Tabs
      defaultIndex={tabIndex.mainTabIndex}
      onSelect={(index: number) => setTabIndex({ mainTabIndex: index, codeTabIndex: tabIndex.codeTabIndex })}
    >
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code</Tab>
      </TabList>
      <TabPanel className="tab-demo">{children}</TabPanel>
      <TabPanel style={{ fontSize: '14px' }} className="tab-code">
        <Tabs
          defaultIndex={tabIndex.codeTabIndex}
          onSelect={(index: number) => setTabIndex({ mainTabIndex: tabIndex.mainTabIndex, codeTabIndex: index })}
        >
          <TabList>
            <Tab>
              <img src={codeImg} height="30" alt="code-img" />
            </Tab>
            {style && (
              <Tab>
                <img src={styleImg} height="30" alt="style-img" />
              </Tab>
            )}
          </TabList>
          <TabPanel>
            <SyntaxHighlighter language={codeExt} style={prism} showLineNumbers={true}>
              {code}
            </SyntaxHighlighter>
          </TabPanel>
          {style && (
            <TabPanel>
              <SyntaxHighlighter language={styleExt} style={prism} showLineNumbers={true}>
                {style}
              </SyntaxHighlighter>
            </TabPanel>
          )}
        </Tabs>
      </TabPanel>
    </Tabs>
  );
};
