export type DemoTabProps = {
  /**
   * Demo component.
   */
  children: React.ReactNode;
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
