import React, { useMemo } from "react";
// import PropTypes from "prop-types";
import { Chip } from "@mui/material";

FilterViewer.propTypes = {};
const LIST_FILTERS = [
  {
    id: 0,
    getLabel: () => "Vận chuyển miễn phí",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 1,
    getLabel: () => "Có khuyến mãi",
    isActive: (filters) => filters.isPromotion,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: (filter) => filter,
  },

  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) => Object.keys(filters).includes("salePrice_lte"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      if (
        newFilters.hasOwnProperty("salePrice_gte") &&
        newFilters.hasOwnProperty("salePrice_lte")
      ) {
        delete newFilters.salePrice_gte;
        delete newFilters.salePrice_lte;
        return newFilters;
      }
    },
    onToggle: null,
  },

  {
    id: 4,
    getLabel: (filters) => `Danh mục: ${filters["category.name"]}`,
    isActive: () => true,
    isVisible: (filters) => Object.keys(filters).includes("category.name"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      console.log(`name`, newFilters);
      if (
        newFilters.hasOwnProperty("category.name") &&
        newFilters.hasOwnProperty("category.id")
      ) {
        delete newFilters["category.name"];
        delete newFilters["category.id"];
        console.log("New filters", newFilters);
        return newFilters;
      }
    },
    onToggle: null,
  },
];

function FilterViewer({ filters, onChange }) {
  const visibleFilters = useMemo(() => {
    return LIST_FILTERS.filter((x) => x.isVisible(filters));
  }, [filters]);

  console.log(`LIST_FILTERS`, LIST_FILTERS);
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      {visibleFilters.map((x) => (
        <Chip
          key={x.id}
          label={x.getLabel(filters)}
          clickable={!x.isRemovable}
          color={x.isActive(filters) ? "primary" : "default"}
          sx={{ margin: "10px" }}
          onClick={() => {
            if (!onChange) return;
            const newFilters = x.onToggle(filters);
            onChange(newFilters);
          }}
          onDelete={
            x.isRemovable
              ? () => {
                  if (!onChange) return;
                  const newFilters = x.onRemove(filters);
                  console.log(444444444, newFilters);
                  onChange(newFilters);
                }
              : null
          }
        />
      ))}
    </div>
  );
}

export default FilterViewer;
