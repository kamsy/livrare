import { PureComponent } from "react";
import { NotifyClose } from "./Notify";
import { MyContext } from "./Layout";

// a base component to reuse methods and some UI i'd rather not import

class BaseComponent extends PureComponent {
    state = {
        pageIndex: 0,
        pageSize: 10,
        keyword: "",
        activeTab: 1
    };

    tabChanged = tab => {
        this.context.resetCanReset();
        return this.setState(
            {
                activeTab: Number(tab),
                checkArr: [],
                allSelected: false,
                selectedRowKeys: [],
                pageIndex: 0
            },
            () =>
                this.fetch({
                    pageIndex: 0,
                    activeTab: Number(tab)
                })
        );
    };

    onSelectAll = arrToUse => {
        const { selectedRowKeys } = this.state;

        let newArrOfKeys = [];
        if (selectedRowKeys.length !== arrToUse.length) {
            arrToUse.forEach(item => newArrOfKeys.push(item.id));

            this.setState(prevState => {
                return {
                    ...prevState,
                    selectedRowKeys: newArrOfKeys,
                    allSelected: true
                };
            });
        } else {
            this.setState({ selectedRowKeys: [], allSelected: false });
        }
    };

    onSelectChange = ({ selectedRowKey, arrToUse }) => {
        const { selectedRowKeys } = this.state;
        const keysArr = [...selectedRowKeys];
        const itemIndex = keysArr.findIndex(id => id === selectedRowKey);

        if (itemIndex === -1) {
            keysArr.push(selectedRowKey);
        } else {
            keysArr.splice(itemIndex, 1);
        }

        this.setState(prevState => {
            return {
                ...prevState,
                selectedRowKeys: keysArr,
                allSelected: arrToUse.length !== keysArr.length ? false : true
            };
        });
    };

    handleSearch = ({ target: { value } }) => {
        this.setState({ keyword: value });
    };

    getBySearch = (empty = false) => {
        const { pageSize, activeTab, sortBy } = this.state;
        const { keyword, canReset, resetCanReset } = this.context;
        if (keyword.length > 0) {
            this.setState({
                pageIndex: 0
            });
            return this.fetch({
                pageIndex: 0,
                pageSize,
                activeTab,
                sortBy
            });
        }
        if (canReset) {
            this.fetch({
                pageIndex: 0,
                pageSize,
                activeTab,
                sortBy
            });
            return this.setState(
                {
                    pageIndex: 0
                },
                () => resetCanReset()
            );
        }
    };

    handleTableChange = page => {
        const { pageSize, activeTab } = this.state;
        let { keyword } = this.context;

        NotifyClose();
        this.setState({
            pageIndex: page - 1
        });
        this.fetch({
            pageIndex: page - 1,
            pageSize,
            activeTab,
            keyword
        });
    };
}

BaseComponent.contextType = MyContext;

export default BaseComponent;
