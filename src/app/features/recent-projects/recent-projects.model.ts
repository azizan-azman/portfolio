export interface RecentProject {
  pageTitle1: string;
  pageTitle2: string;
  pageSubtitle: string;
  dataList: RecentProjectDataList[];
}

export interface RecentProjectDataList {
  imageList: RecentProjectDataListImageList[];
  topicTitle: string;
  topicBulletPoints: boolean;
  topicParagraphList: RecentProjectDataListTopicParagraphList[];
}

export interface RecentProjectDataListImageList {
  imagePathList: RecentProjectDataListImageListImagePathList[];
  title: string;
  tag: string;
  detailPage: boolean;
  detailPageRootLink: string;
  detailPageLink: string;
}

export interface RecentProjectDataListImageListImagePathList {
  imagePath: string;
  imageTitle: string;
}
export interface RecentProjectDataListTopicParagraphList {
  highlight: string;
  paragraph: string;
  bullet: boolean;
}
