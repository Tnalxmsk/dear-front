import styled from "styled-components";

interface TabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const Tabs = ({ activeTab, onTabClick }: TabsProps) => {
  return (
    <TabsContainer>
      <TabButton active={activeTab === "total"} onClick={() => onTabClick("total")}>
        전체보기
      </TabButton>
      <TabButton active={activeTab === "received"} onClick={() => onTabClick("received")}>
        받은 편지함
      </TabButton>
      <TabButton active={activeTab === "sent"} onClick={() => onTabClick("sent")}>
        보낸 편지함
      </TabButton>
      <TabButton active={activeTab === "draft"} onClick={() => onTabClick("draft")}>
        내게 쓴 편지함
      </TabButton>
      <TabButton active={activeTab === "save"} onClick={() => onTabClick("save")}>
        저장한 편지함
      </TabButton>
    </TabsContainer>
  );
};

export default Tabs;

const TabsContainer = styled.div`
  padding: 0px 10px;
  display: flex;
  gap: 6px;
  margin-bottom: -35px;
  align-self: flex-start;
  margin-left: calc((100% - 1280px) / 2);
  margin-top: 35px;
  height: 51px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-left: 0;
  }
`;

const TabButton = styled.button<{ active?: boolean }>`
  padding: 10px 20px;
  font-size: 22px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ active }) => (active ? "#fff" : "#333")};
  background: ${({ active }) => (active ? "#333" : "#fff")};
  border-radius: 5px 20px 0 0;
  box-shadow: 4px -2px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #b3b3b3;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;
