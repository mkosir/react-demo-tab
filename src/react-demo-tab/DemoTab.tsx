import React, { FC, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import codeImg from './img/jsx.png';
import styleImgSass from './img/sass.png';
import styleImgCSS from './img/css.png';

type LocalStorage = {
  mainTabIndex: number;
  codeTabIndex: number;
};

function useLocalStorage<T>(
  key: string,
  initialValue: T | null = null,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(
    JSON.parse(localStorage.getItem(key) as string) || initialValue,
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  return [value, setValue];
}

type Props = {
  /**
   * Demo code.
   */
  code: string;
  /**
   * Demo style.
   */
  style?: string;
  /**
   * Code file extension for image to be displayed.
   */
  codeExt?: 'jsx' | 'tsx';
  /**
   * Style file extension for image to be displayed.
   */
  styleExt?: 'css' | 'scss';
};

const DemoTab: FC<Props> = ({ code, style, codeExt = 'jsx', styleExt = 'css', children }) => {
  const [tabIndex, setTabIndex] = useLocalStorage<LocalStorage>('react-demo-tab', {
    mainTabIndex: 0,
    codeTabIndex: 0,
  });

  const styleImg = styleExt === 'css' ? styleImgCSS : styleImgSass;

  return (
    <Tabs
      defaultIndex={tabIndex.mainTabIndex}
      onSelect={(index: number) =>
        setTabIndex((prevTabIndex) => ({
          ...prevTabIndex,
          mainTabIndex: index,
        }))
      }
    >
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code</Tab>
      </TabList>
      <TabPanel className="tab-demo">{children}</TabPanel>
      <TabPanel style={{ fontSize: '14px' }} className="tab-code">
        <Tabs
          defaultIndex={tabIndex.codeTabIndex}
          onSelect={(index: number) =>
            setTabIndex((prevTabIndex) => ({
              ...prevTabIndex,
              codeTabIndex: index,
            }))
          }
        >
          <TabList>
            <Tab>
              <img src={codeImg} height="30" />
            </Tab>
            {style && (
              <Tab>
                <img src={styleImg} height="30" />
              </Tab>
            )}
          </TabList>
          <TabPanel>
            <SyntaxHighlighter language={codeExt} style={prism}>
              {code}
            </SyntaxHighlighter>
          </TabPanel>
          {style && (
            <TabPanel>
              <SyntaxHighlighter language={styleExt} style={prism}>
                {style}
              </SyntaxHighlighter>
            </TabPanel>
          )}
        </Tabs>
      </TabPanel>
    </Tabs>
  );
};

export default DemoTab;
