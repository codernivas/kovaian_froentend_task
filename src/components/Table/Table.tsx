import React, { useEffect, useState } from "react";
import styles from "./Table.module.scss";
import TableModal from "./TableModal";
import FilterDrawer from "./FilterDrawer";
import { IoSearch } from "react-icons/io5";
import { RiFilter2Fill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteLead } from "../../redux/leadsSlice";
import { useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";

const Table: React.FC = () => {
  const leads = useSelector((state: RootState) => state.leads.leads);
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState<"add" | "edit" | null>(null);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 480);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
  };
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleAdd = (row: any) => {
    setModalType("add");
    setSelectedRow(null);
  };

  const handleEdit = (row: any) => {
    navigate("/leads/editLeadsModule", { state: { lead: row } });

    setSelectedRow(row);
  };
  const handleView = (row: any) => {
    navigate("/leads/viewLeadsModule", { state: { lead: row } });

    setSelectedRow(row);
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedRow(null);
  };

  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({ status: "", source: "", size: "" });

  const filteredData = leads.filter((item) => {
    const matchName = item.leadOwner
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchStatus = filters.status ? item.status === filters.status : true;
    const matchSource = filters.source ? item.source === filters.source : true;
    const matchSize = filters.size ? item.revenue.includes(filters.size) : true;
    return matchName && matchStatus && matchSource && matchSize;
  });

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h2>All Leads</h2>
          <p>Find all leads in a single place</p>
        </div>

        <div className={styles.controls}>
          <div className={styles.searchWrapper}>
            <IoSearch className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button
            className={styles.filterBtn}
            onClick={() => setIsFilterOpen(true)}
          >
            <span className={styles.filterIcon}>
              <RiFilter2Fill />
            </span>
          </button>

          <button className={styles.addBtn} onClick={handleAdd}>
            + {!isMobile && " Add Leads"}
          </button>
        </div>
      </div>

      <div className={styles.table}>
        {!isMobile && (
          <div className={styles.tableRow + " " + styles.head}>
            <div>S.No</div>
            <div>Name</div>
            <div>Email ID</div>
            <div>Status</div>
            <div>Source</div>
            <div>Revenue</div>
            <div>Action</div>
          </div>
        )}

        {paginatedData.map((item, i) => {
          if (isMobile) {
            return (
              <div
                key={item.id}
                className={`${styles.card} ${
                  selectedCardId === item.id ? styles.cardActive : ""
                }`}
                onClick={() =>
                  setSelectedCardId((prev) =>
                    prev === item.id ? null : item.id
                  )
                }
              >
                {/* Name & Status */}
                <div className={styles.cardRow}>
                  <div className={styles.halfWidth}>
                    <p className={styles.label}>Name</p>
                    <h6 className={`${styles.value} ${styles.truncateText}`}>
                      {item.leadOwner}
                    </h6>
                  </div>
                  <div className={styles.halfWidth}>
                    <p className={styles.label}>Status</p>
                    <span
                      className={`${styles.statusChip} ${
                        styles[item.status.toLowerCase().replace(" ", "")]
                      }`}
                    >
                      <span className={styles.statusDot}></span> {item.status}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <hr className={styles.divider} />

                {/* Source & Size */}
                <div className={styles.cardRow}>
                  <div className={styles.halfWidth}>
                    <p className={styles.label}>Source</p>
                    <h6 className={`${styles.value} ${styles.truncateText}`}>
                      {item.source}
                    </h6>
                  </div>
                  <div className={styles.halfWidth}>
                    <p className={styles.label}>Revenue</p>
                    <h6
                      className={`${styles.value} ${
                        item.revenue.includes("-")
                          ? styles.negative
                          : styles.positive
                      }`}
                    >
                      {item.revenue}
                    </h6>
                  </div>
                </div>

                <hr className={styles.divider} />

                {/* Email */}
                <div className={styles.cardRow}>
                  <div>
                    <p className={styles.label}>Email</p>
                    <h6 className={`${styles.value} ${styles.truncateText}`}>
                      {item.email}
                    </h6>
                  </div>
                </div>

                {/* Action Buttons */}

                {selectedCardId === item.id && (
                  <>
                    <hr className={styles.divider} />

                    <div className={styles.cardActions}>
                      <button
                        className={styles.viewBtn}
                        onClick={() => dispatch(deleteLead(item.id))}
                      >
                        <MdDeleteOutline /> Delete
                      </button>
                      <button
                        className={styles.editBtn}
                        onClick={() => handleEdit(item)}
                      >
                        <FiEdit /> Edit
                      </button>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => handleView(item)}
                      >
                        <IoEye /> View
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          }

          // Desktop view (table row)
          return (
            <div className={styles.tableRow} key={item.id}>
              <div>{String(i + 1).padStart(2, "0")}</div>
              <div>{item.leadOwner}</div>
              <div>{item.email}</div>
              <div>
                <span
                  className={`${styles.statusChip} ${
                    styles[item.status.toLowerCase().replace(" ", "")]
                  }`}
                >
                  <span className={styles.statusDot}></span>
                  {item.status}
                </span>
              </div>
              <div>{item.source}</div>
              <div
                className={`${styles.value} ${
                  item.revenue.includes("-") ? styles.negative : styles.positive
                }`}
              >
                {item.revenue}
              </div>
              <div>
                <button
                  className={styles.viewBtn}
                  onClick={() => dispatch(deleteLead(item.id))}
                >
                  <MdDeleteOutline /> 
                </button>
                <button
                  className={styles.editBtn}
                  onClick={() => handleEdit(item)}
                >
                  <FiEdit /> 
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleView(item)}
                >
                  <IoEye /> 
                </button>
              </div>
            </div>
          );
        })}

        <div
          className={isMobile ? styles.mobileFooter : styles.paginationFooter}
        >
          {!isMobile && (
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className={styles.paginationInfo}>
                Showing{" "}
                {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
                {filteredData.length}
              </div>

              <select
                className={styles.itemsPerPageDropdown}
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1); // reset to first page
                }}
              >
                {[10, 20, 50, 100].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className={styles.pagination}>
            <button
              className={styles.pageButton}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt; {!isMobile && "Previous"}
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`${styles.pageButton} ${
                  currentPage === index + 1 ? styles.activePage : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={styles.pageButton}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              {!isMobile && "Next"} &gt;
            </button>
          </div>
        </div>
      </div>

      <TableModal
        isOpen={modalType !== null}
        type={modalType}
        data={selectedRow}
        onClose={closeModal}
      />
      {isFilterOpen && (
        <FilterDrawer
          onClose={() => setIsFilterOpen(false)}
          onApply={(f) => setFilters(f)}
        />
      )}
    </div>
  );
};

export default Table;
