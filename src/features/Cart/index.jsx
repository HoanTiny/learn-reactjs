import React from "react";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "./selectors";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Paper,
} from "@mui/material";
import ItemCart from "./components/ItemCart";
import Checkbox from "@mui/material/Checkbox";
import { formatPrice } from "../../utils";

CartFeature.propTypes = {};

function CartFeature(props) {
  const toltal = useSelector(cartTotalSelector);
  const storeState = useSelector((state) => state.cart.cartItems);
  localStorage.setItem("cart", JSON.stringify(storeState));
  console.log(storeState);
  return (
    <div>
      <Box pt={4}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Paper>
                <Grid container padding="20px" alignItems="center">
                  <Grid item xs={5} textAlign="left">
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Chọn tất cả"
                    />
                  </Grid>

                  <Grid item xs={2}>
                    <Box>
                      <span>Giá bán</span>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box>
                      <span>Số lượng</span>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Box>
                      <span>Thành tiền</span>
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <Box>
                      <span>Xóa</span>
                    </Box>
                  </Grid>
                </Grid>
                {storeState.map((item) => (
                  <ItemCart
                    key={item.id}
                    product={item.product}
                    quantity={item.quantity}
                  />
                ))}
              </Paper>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                padding: "12px",
              }}
            >
              <Paper
                sx={{
                  padding: "12px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Giao tới</span>
                  <Button>Thay đổi</Button>
                </Box>
                <Box
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <h4>TRẦN NGỌC HOÀN | 0987654321</h4>
                  <p>Địa chỉ: 123 Đường ABC, Phường DEF, Quận GHI, TP. HCM</p>
                </Box>
              </Paper>

              <Paper
                sx={{
                  marginTop: "10px",
                  textAlign: "left",
                  padding: "12px",
                }}
              >
                <Box
                  sx={{
                    marginLeft: "6px",
                  }}
                >
                  <h4>Tiny Khuyến Mãi</h4>
                </Box>
                <Box>
                  <Button
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    CHọn hoặc nhập khuyến mãi khác
                  </Button>
                </Box>
              </Paper>
              <Paper
                sx={{
                  marginTop: "10px",
                  padding: "12px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px",
                  }}
                >
                  <span>Tạm tính</span>
                  <span>{formatPrice(toltal)}</span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px",
                  }}
                >
                  <span>Phí vận chuyển</span>
                  <span>0</span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px",
                  }}
                >
                  <span>Khuyến mãi</span>
                  <span>0</span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "1px solid #ccc",
                    padding: "6px",
                  }}
                >
                  <span>Thành tiền</span>
                  <span>{formatPrice(toltal)}</span>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default CartFeature;
